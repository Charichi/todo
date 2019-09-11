import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../services/data/todo-data.service";
import { Router } from "@angular/router";

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
  message: string;

  constructor(private todoService: TodoDataService, private route: Router) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.getAllTodos("Brandero").subscribe(response => {
      this.todos = response;
    });
  }

  deleteTodo(id) {
    this.todoService.deleteTodo("Brandero", id).subscribe(response => {
      this.message = "succesfully deleted Todo";
      this.refreshTodos();
    });
  }

  addTodo() {
    this.route.navigate(["todos", -1]);
  }

  updateTodo(id) {
    this.route.navigate(["todos", id]);
  }
}
