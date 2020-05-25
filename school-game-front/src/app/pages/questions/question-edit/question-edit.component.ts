import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Question} from '../question.model';
import {QuestionService} from '../question.service';
import {TopicService} from '../../topics/topic.service';
import {Topic} from '../../topics/topic.model';


@Component({
  selector: 'app-edit-question',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  question: Question = new Question();
  topics: Topic[];

  constructor(
      private questionService: QuestionService,
      private topicService: TopicService,
      private router: Router,
      private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    console.log('Question Edit id', id);

    this.getTopics();

    if (id.toString() !== 'create') {
      this.findById(id);
    }
  }

  getTopics() {
    this.topicService.getAll().subscribe((data: any) => {
      this.topics = data;
    }, err => {
      console.log('Error get Topics', err);
    });
  }

  findById(id: number) {
    this.questionService.findById(id).subscribe((data: any) => {
      this.question = data;
    }, err => {
      console.log('Error findById', err);
    });
  }

  save() {
    console.log('Question Save', this.question);
    this.questionService.createOrUpdate(this.question)
    .subscribe(data => console.log(data), error => console.log(error));
    this.question = new Question();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/questions']);
  }
}
