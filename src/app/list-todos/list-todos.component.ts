import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../services/data/todo-data.service";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoDataService) {}

  ngOnInit() {
    this.todoService.getAllTodos("Brandero").subscribe(response => {
      this.todos = response;
    });
  }
}
