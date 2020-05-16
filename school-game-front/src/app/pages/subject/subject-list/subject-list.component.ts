import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SubjectService} from '../subject.service';
import {Subject} from '../subject.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) { }

  subjects: Subject[];
  message: {};

  ngOnInit() {
    this.getAll();
  }

  getNavigation(link, id) {
    if (id === '') {
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }

  getAll() {
    this.subjectService.getAll().subscribe((res: any[]) => {
      this.subjects = res;
    }, err => {
      console.log(err);
    });
  }

  delete(subject): void {
    if (confirm('Are you sure?')) {
      this.subjectService.delete(subject).subscribe(() => {
            this.message = {type: 'success', message: 'Delete was successful!'};
            setTimeout(() => {
              this.getAll();
            }, 1000);
          },
          err => {
            this.message = {type: 'warning', message: 'Error deleting. ' + err};
          }
      );
    }
  }
}
