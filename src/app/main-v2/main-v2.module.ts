import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';


import { HomeComponent } from './home/home.component';

import { APP_ROUTES } from './routes/main-routes';
import { ExcelParserComponent } from './excel-parser/excel-parser.component';
import { DayShiftComponent } from './excel-parser/day-shift/day-shift.component';
import { ElasticTableComponent } from './elastic-table/elastic-table.component';
import { MemberAssignmentComponent } from './member-assignment/member-assignment.component';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    ExcelParserComponent,
    DayShiftComponent,
    ElasticTableComponent,
    MemberAssignmentComponent
  ]
})
export class MainV2Module { }
