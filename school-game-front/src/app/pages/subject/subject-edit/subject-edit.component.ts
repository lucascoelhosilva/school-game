import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../subject.service';
import {ActivatedRoute, Router} from '@angular/router';

import {Subject} from '../subject.model';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  subject: Subject = new Subject();
  submitted = false;

  constructor(
      private subjectService: SubjectService,
      private router: Router,
      private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    if (id !== undefined) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.subjectService.findById(id).subscribe((data: any) => {
      this.subject = data;
    }, err => {
      console.log('Error findById', err);
    });
  }

  save() {
    this.subjectService.createOrUpdate(this.subject)
    .subscribe(data => console.log(data), error => console.log(error));
    this.subject = new Subject();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/subjects']);
  }
}
