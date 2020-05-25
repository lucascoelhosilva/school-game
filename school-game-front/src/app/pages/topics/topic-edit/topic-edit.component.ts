import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Topic} from '../topic.model';
import {TopicService} from '../topic.service';
import {SubjectService} from '../../subject/subject.service';
import {Subject} from '../../subject/subject.model';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class TopicEditComponent implements OnInit {

  topic: Topic = new Topic();
  subjects: Subject[];

  constructor(
      private topicService: TopicService,
      private subjectService: SubjectService,
      private router: Router,
      private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    console.log('Topic Edit id', id);

    this.getSubjects();

    if (id.toString() !== 'create') {
      this.findById(id);
    }
  }

  getSubjects() {
    this.subjectService.getAll().subscribe((data: any) => {
      this.subjects = data;
    }, err => {
      console.log('Error get Subjects', err);
    });
  }

  findById(id: number) {
    this.topicService.findById(id).subscribe((data: any) => {
      this.topic = data;
    }, err => {
      console.log('Error findById', err);
    });
  }

  save() {
    console.log('Topic Save', this.topic);
    this.topicService.createOrUpdate(this.topic)
    .subscribe(data => console.log(data), error => console.log(error));
    this.topic = new Topic();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/topics']);
  }
}
