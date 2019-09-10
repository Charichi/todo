import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../services/data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  username = "";
  message = "";
  messageV = "";
  error = "";
  word = "";

  ngOnInit() {
    this.username = this.route.snapshot.params["name"];
  }

  helloWorldMessage() {
    this.service
      .showMessage()
      .subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
      );
  }

  handleSuccessfulResponse(response) {
    this.message = response.message;
  }
  handleSuccessfulResponseWithV(response) {
    this.messageV = response.message;
  }

  helloWorldMessageWithV() {
    this.service
      .showMessageWithVariable(this.word)
      .subscribe(
        response => this.handleSuccessfulResponseWithV(response),
        error => this.handleErrorResponse(error)
      );
  }

  handleErrorResponse(error) {
    this.error = error.message;
  }
}
