import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthService } from "../services/hardcoded-auth.service";

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

  constructor(
    private router: Router,
    private hardcodedAuth: HardcodedAuthService
  ) {}

  showUsername() {
    if (this.hardcodedAuth.authenticate(this.username, this.password)) {
      this.router.navigate(["welcome", this.username]);
      this.invalid = false;
    } else {
      this.invalid = true;
    }
  }

  ngOnInit() {}
}
