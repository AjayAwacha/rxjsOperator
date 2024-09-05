import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ColdObservableComponent } from './cold-observable/cold-observable.component';
import { HotObservableComponent } from './hot-observable/hot-observable.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { OperatorCreateObservableComponent } from './operator-create-observable/operator-create-observable.component';
import { GeneralRxjsOperatorComponent } from './general-rxjs-operator/general-rxjs-operator.component';
import { MergingOperatorComponent } from './merging-operator/merging-operator.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { SubjectComponent } from './subject/subject.component';
import { PracticeComponent } from './practice/practice.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ColdObservableComponent,
    HotObservableComponent,
    CustomObservableComponent,
    OperatorCreateObservableComponent,
    GeneralRxjsOperatorComponent,
    MergingOperatorComponent,
    ErrorHandlingComponent,
    SubjectComponent,
    PracticeComponent,
    CompOneComponent,
    CompTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
