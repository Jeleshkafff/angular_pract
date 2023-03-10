import {Component, EventEmitter, Output} from "@angular/core"
import { NgForm } from "@angular/forms"
import { PostsService } from "../posts.service"

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateCompanent {
  enteredTitle: string = ""
  enteredContent: string = ""
  
constructor(public postService: PostsService) {}

  onAddPost(form: NgForm) {
    if(form.invalid) return
    
    this.postService.addPost(form.value.title, form.value.content)
    form.resetForm()
  }
}
