import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FlexComponent } from './flex/flex.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { BasiCalculatorComponent } from './basi-calculator/basi-calculator.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PdfComponent } from './pdf/pdf.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ReuseComponent } from './reuse/reuse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlexComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    CrudOperationComponent,
    DialogComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    BasiCalculatorComponent,
    TodolistComponent,
    ParentComponent,
    ChildComponent,
    PdfComponent,
    ChildParentComponent,
    ParentChildComponent,
    ReuseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
