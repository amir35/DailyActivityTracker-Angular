import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ActivityTracker';

  //Define your variables done,todos,newToDo,newToDoObj,error
  label: boolean = true;
  newToDo: string;
  Todos: any[] = [];
  todoNotEmpty: boolean = false;
  done: boolean = false;
  error : boolean = false;

  //Define your constructor here with todos as [] ,newToDo as '' and error as false
  constructor() {}

  //Define your clearAll function here
  clearAll() {
    this.Todos.length = 0;
    this.label = true;
  }

  addActivity() {
    if (this.newToDo != '') {
      this.Todos.push(this.newToDo);
      this.newToDo = '';
      this.label = false;
      this.todoNotEmpty = true;
    }else{
      this.error = true;
    }
  }

  yourfunc(e) {
    if (e.target.checked) {
      console.log("Box checked");
    }
  }


}
