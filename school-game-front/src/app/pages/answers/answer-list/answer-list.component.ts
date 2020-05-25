import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AnswerService} from '../answer.service';
import {Answer} from '../answer.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  constructor(
      private answerService: AnswerService,
      private router: Router
  ) { }

  answers: Answer[];
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
    this.answerService.getAll().subscribe((res: any[]) => {
      this.answers = res;
    }, err => {
      console.log(err);
    });
  }

  delete(id): void {
    if (confirm('Are you sure?')) {
      this.answerService.delete(id).subscribe(() => {
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
