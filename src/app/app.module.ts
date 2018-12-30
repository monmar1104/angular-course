import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //added
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DataBindingComponent,
    TaskManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
