import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "Brandero";
  password = "";
  errorMessage = "Invalid credentials";
  invalid = false;

  showUsername() {
    if (this.username === "brandero" && this.password === "hihi") {
      this.invalid = false;
    } else {
      this.invalid = true;
    }
  }

  constructor() {}

  ngOnInit() {}
}
