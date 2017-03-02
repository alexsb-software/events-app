import { Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MemberAssignmentComponent } from '../member-assignment/member-assignment.component';
import { DayTasksComponent } from '../member-assignment/day-tasks/day-tasks.component';
import { ShiftTasksComponent } from '../member-assignment/day-tasks/shift-tasks/shift-tasks.component';
import { ExcelExportComponent } from '../excel-export/excel-export.component';
export const APP_ROUTES: Route[] = [
    { path: 'v2', component: HomeComponent },
    {
        path: 'excel-export',
        component: ExcelExportComponent

    },
    {
        /**
         * TODO fix router outlets
         */
        path: 'member-assignment', component: MemberAssignmentComponent,
        children: [
            { path: 'day-assignment/:id', component: DayTasksComponent,outlet:'day-outlet', children: [{ path: 'shift/:id', component: ShiftTasksComponent, outlet: 'shift-outlet' }] }],

    },

    { path: '', component: HomeComponent }
];