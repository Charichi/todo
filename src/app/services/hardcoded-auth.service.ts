import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardcodedAuthService {
  constructor() {}

  authenticate(username, password) {
    if (username === "Brandero" && password === "hihi") {
      sessionStorage.setItem("User", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("User");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("User");
  }
}
