
import {Component, OnInit, OnDestroy} from "@angular/core"
import { Subscription } from "rxjs";

import {IPost} from "../post.model"
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListConponent implements OnInit, OnDestroy{

  posts: IPost[] = [];
  private postsSub!: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts()
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: IPost[])=> {
        this.posts = posts
      })
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe()
  }
}