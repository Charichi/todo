import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../list-todos/list-todos.component";
import { ActivatedRoute, Router } from "@angular/router";
import { TodoDataService } from "../services/data/todo-data.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todo: Todo;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoDataService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.todo = new Todo(this.id, "", false, new Date());
    if (this.id != -1) {
      this.todoService.getTodo("Brandero", this.id).subscribe(data => {
        this.todo = data;
      });
    }
  }

  saveTodo() {
    if (this.id != -1) {
      this.todoService
        .updateTodo("Brandero", this.todo.id, this.todo)
        .subscribe(response => {
          this.router.navigate(["todos"]);
        });
    } else {
      this.todoService.addTodo("Brandero", this.todo).subscribe(response => {
        this.router.navigate(["todos"]);
      });
    }
  }
}
