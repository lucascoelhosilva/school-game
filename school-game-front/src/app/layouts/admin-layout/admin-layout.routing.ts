import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { SubjectListComponent } from 'src/app/pages/subject/subject-list/subject-list.component';
import {SubjectEditComponent} from '../../pages/subject/subject-edit/subject-edit.component';
import {TopicListComponent} from '../../pages/topics/topic-list/topic-list.component';
import {TopicEditComponent} from '../../pages/topics/topic-edit/topic-edit.component';
import {QuestionListComponent} from '../../pages/questions/question-list/question-list.component';
import {QuestionEditComponent} from '../../pages/questions/question-edit/question-edit.component';
import {AnswerListComponent} from '../../pages/answers/answer-list/answer-list.component';
import {AnswerEditComponent} from '../../pages/answers/answer-edit/answer-edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',       component: DashboardComponent },
    { path: 'user-profile',    component: UserProfileComponent },
    { path: 'tables',          component: TablesComponent },
    { path: 'icons',           component: IconsComponent },
    { path: 'maps',            component: MapsComponent },
    // Subjects
    { path: 'subjects',        component: SubjectListComponent },
    { path: 'subjects/:id',    component: SubjectEditComponent },
    { path: 'subjects/create', component: SubjectEditComponent },
    // Topics
    { path: 'topics',        component: TopicListComponent },
    { path: 'topics/:id',    component: TopicEditComponent },
    { path: 'topics/create', component: TopicEditComponent },
    // Questions
    { path: 'questions',        component: QuestionListComponent },
    { path: 'questions/:id',    component: QuestionEditComponent },
    { path: 'questions/create', component: QuestionEditComponent },
    // Answers
    { path: 'answers',        component: AnswerListComponent },
    { path: 'answers/:id',    component: AnswerEditComponent },
    { path: 'answers/create', component: AnswerEditComponent },
];
