import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasiCalculatorComponent } from './basi-calculator/basi-calculator.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { ChildComponent } from './child/child.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { FlexComponent } from './flex/flex.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ParentComponent } from './parent/parent.component';
import { PdfComponent } from './pdf/pdf.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReuseComponent } from './reuse/reuse.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {
    path: 'CRUD Operation',
    component: CrudOperationComponent,
  },
  { path: 'Basic Calculator', component: BasiCalculatorComponent },
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive-form', component: ReactiveFormsComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'childparent', component: ChildParentComponent },
  { path: 'parentchild', component: ParentChildComponent },
  { path: 'reuse', component: ReuseComponent },
  { path: 'pdf', component: PdfComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
