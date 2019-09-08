import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router) {}

  showUsername() {
    if (this.username === "Brandero" && this.password === "hihi") {
      this.router.navigate(["welcome", this.username]);
      this.invalid = false;
    } else {
      this.invalid = true;
    }
  }

  ngOnInit() {}
}
