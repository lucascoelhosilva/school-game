import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectListComponent } from 'src/app/pages/subject/subject-list/subject-list.component';
import { SubjectEditComponent } from '../../pages/subject/subject-edit/subject-edit.component';
import {TopicListComponent} from '../../pages/topics/topic-list/topic-list.component';
import {TopicEditComponent} from '../../pages/topics/topic-edit/topic-edit.component';
import {QuestionListComponent} from '../../pages/questions/question-list/question-list.component';
import {QuestionEditComponent} from '../../pages/questions/question-edit/question-edit.component';
import {AnswerListComponent} from '../../pages/answers/answer-list/answer-list.component';
import {AnswerEditComponent} from '../../pages/answers/answer-edit/answer-edit.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    SubjectListComponent,
    SubjectEditComponent,
    TopicListComponent,
    TopicEditComponent,
    QuestionListComponent,
    QuestionEditComponent,
    AnswerListComponent,
    AnswerEditComponent
  ]
})

export class AdminLayoutModule {}
