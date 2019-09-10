import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export class helloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: "root"
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  showMessage() {
    return this.http.get<helloWorldBean>("http://localhost:8080/hello-bean");
  }

  showMessageWithVariable(word) {
    return this.http.get<helloWorldBean>(`http://localhost:8080/hello/${word}`);
  }
}
