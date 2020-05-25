import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionService} from '../question.service';
import {Question} from '../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor(
      private questionService: QuestionService,
      private router: Router
  ) { }

  questions: Question[];
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
    this.questionService.getAll().subscribe((res: any[]) => {
      this.questions = res;
    }, err => {
      console.log(err);
    });
  }

  delete(id): void {
    if (confirm('Are you sure?')) {
      this.questionService.delete(id).subscribe(() => {
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
