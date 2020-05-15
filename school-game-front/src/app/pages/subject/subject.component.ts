import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DialogService } from '../../components/shared/dialog.service';

import { SubjectService } from './subject.service';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(
    private subjectService: SubjectService,
    private dialogComponent: DialogService,
  ) { }

  subjectForm: FormGroup;
  formBuilder: FormBuilder;

  subjects: Subject[];
  subject: Subject;

  message: {};
  classCss: {};

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.subjectService.getAll().subscribe((res: any[]) => {
      this.subjects = res;
    }, err => {
      console.log(err);
    });
  }

  view(id: number) {
    this.subjectService.findById(id).subscribe((data: any) => {
      this.subject = data;
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  createOrUpdate(subject) {
    this.subjectService.createOrUpdate(subject).subscribe((data: any) => {
      this.subject = data;
    });
    if (subject.id == null || subject.id === '') {
      this.add(subject);
    } else {
      this.edit(subject);
    }
    this.subjectForm.reset();
    this.showMessage({
      type: 'success',
      text: `Subject ${subject.nome} salvo com sucesso!`
    });

    setTimeout(() => { this.getAll(); }, 2000);
  }

  add(subject) {
    this.subjects.push(subject);
  }

  edit(subject) {
    this.subjectForm = this.formBuilder.group({
      id: this.formBuilder.control(subject.id),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    });
    this.subjectForm.setValue({
      id: subject.id,
      name: subject.name
    });
  }


  delete(id: number) {
    this.dialogComponent.confirm('Tem certeza que deseja realizar essa ação ?')
      .then((candelete: boolean) => {
        if (candelete) {
          this.message = {};
          this.subjectService.delete(id).subscribe((data: any) => {
            this.showMessage({
              type: 'success',
              text: `Registro Deletado`
            });
            this.getAll();
          }, err => {
            this.showMessage({
              type: 'error',
              text: err['error']['errors'][0]
            });
          });
        }
      });
  }

  private showMessage(message: { type: string, text: string }): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    };
    this.classCss['alert-' + type] = true;
  }
}
