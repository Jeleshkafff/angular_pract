import {Component} from "@angular/core"

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateCompanent {
  newPost = "NO CONTENT!!!"
  enteredValue = ""
  onAddPost() {

    this.newPost = this.enteredValue
  }
}
