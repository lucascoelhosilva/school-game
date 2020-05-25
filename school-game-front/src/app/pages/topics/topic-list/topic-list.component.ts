import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TopicService} from '../topic.service';
import {Topic} from '../topic.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(
      private topicService: TopicService,
      private router: Router
  ) { }

  topics: Topic[];
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
    this.topicService.getAll().subscribe((res: any[]) => {
      this.topics = res;
    }, err => {
      console.log(err);
    });
  }

  delete(id): void {
    if (confirm('Are you sure?')) {
      this.topicService.delete(id).subscribe(() => {
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
