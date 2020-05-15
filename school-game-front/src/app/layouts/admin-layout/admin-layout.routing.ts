import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { SubjectListComponent } from 'src/app/pages/subject/subject-list/subject-list.component';
import {SubjectEditComponent} from '../../pages/subject/subject-edit/subject-edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',       component: DashboardComponent },
    { path: 'user-profile',    component: UserProfileComponent },
    { path: 'tables',          component: TablesComponent },
    { path: 'icons',           component: IconsComponent },
    { path: 'maps',            component: MapsComponent },
    { path: 'subjects',        component: SubjectListComponent },
    { path: 'subjects/:id',    component: SubjectEditComponent },
    { path: 'subjects/create', component: SubjectEditComponent },
];
