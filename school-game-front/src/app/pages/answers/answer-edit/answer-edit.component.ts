import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Answer} from '../answer.model';
import {AnswerService} from '../answer.service';
import {QuestionService} from '../../questions/question.service';
import {Question} from '../../questions/question.model';

@Component({
  selector: 'app-edit-answer',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.css']
})
export class AnswerEditComponent implements OnInit {

  answer: Answer = new Answer();
  questions: Question[];

  constructor(
      private answerService: AnswerService,
      private questionService: QuestionService,
      private router: Router,
      private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    console.log('Answer Edit id', id);

    this.getQuestions();

    if (id.toString() !== 'create') {
      this.findById(id);
    }
  }

  getQuestions() {
    this.questionService.getAll().subscribe((data: any) => {
      this.questions = data;
    }, err => {
      console.log('Error get All Questions', err);
    });
  }

  findById(id: number) {
    this.answerService.findById(id).subscribe((data: any) => {
      this.answer = data;
      console.log('nswer data', this.answer);
    }, err => {
      console.log('Error findById', err);
    });
  }

  save() {
    console.log('Answer Save', this.answer);
    this.answerService.createOrUpdate(this.answer)
    .subscribe(data => console.log(data), error => console.log(error));
    this.answer = new Answer();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/answers']);
  }
}
