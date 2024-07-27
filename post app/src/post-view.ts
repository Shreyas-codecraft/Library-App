import "./style.css";
import "./posts.css";
import { CommentsManager, PostManager } from "./post-model";
import { Publisher, Subscriber } from "./pub-sub";
let fetched = false;

export class PostsView implements Subscriber {
  postTitleElement: HTMLHeadingElement | null = null;
  postDescription: HTMLParagraphElement | null = null;
  prevButton: HTMLButtonElement | null = null;
  nextButton: HTMLButtonElement | null = null;
  showCommentsButton: HTMLButtonElement | null = null;
  commentsContainer: HTMLParagraphElement | null = null;
  curPostNo: HTMLParagraphElement | null = null;

  titleNo: HTMLParagraphElement | null = null;
  constructor() {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
  <section>
  <p data-testid="curPostNo" class="pageNo"></p>
  <nav>
    <button class ="left-button" data-testid="prev-button">Previous</button>
    <h2>Post Title</h2>
    <button class ="right-button" data-testid="next-button">Next</button>
  </nav>
  <p class="post-desc" data-testid="post-desc">Post Description</p>
  </section>
  <section>
  <button class="commentsButton" data-testid="comments">View Comments</button>
  <p class="comments" data-testid="commentsContainer" style="display: none;"></p>
  <p data-testid="titleNo"></p>
  </section>
  </div>
`;
    this.postTitleElement = document.querySelector("h2");
    this.postDescription = document.querySelector('[data-testid="post-desc"]');
    this.prevButton = document.querySelector('[data-testid="prev-button"]');
    this.nextButton = document.querySelector('[data-testid="next-button"]');
    this.showCommentsButton = document.querySelector(
      '[data-testid="comments"]'
    );
    this.commentsContainer = document.querySelector(
      '[data-testid="commentsContainer"]'
    );
    this.titleNo = document.querySelector('[data-testid="titleNo"]');
    this.curPostNo = document.querySelector('[data-testid="curPostNo"]');
  }
  update(manager: Publisher) {
    if (manager instanceof PostManager) {
      this.commentsContainer!.style.display = "none";
      this.showCommentsButton!.textContent = "View Comments";
      this.curPostNo!.textContent = `Post ${manager.currentPostIndex + 1} of ${
        manager.posts.length
      }`;
      this.prevButton!.disabled = manager.currentPostIndex === 0;
      this.nextButton!.disabled =
        manager.currentPostIndex === manager.posts.length - 1;

      const post = manager.currentPost();
      switch (manager.modelStatus.getModelStatus()) {
        case "available":
          if (this.postTitleElement !== null) {
            this.postTitleElement.textContent =
              post?.title ?? "title is missing";
          }
          if (this.postDescription) {
            this.postDescription.textContent = post?.body || "body is missing";
          }
          break;
        case "pending":
          if (this.postTitleElement !== null) {
            this.postTitleElement.textContent = post?.title || "Loading.....";
          }
          if (this.postDescription) {
            this.postDescription.textContent = post?.body || "Loading.....";
          }
          break;
        case "failure":
          if (this.postTitleElement !== null) {
            this.postTitleElement.textContent = "data not found try again";
          }
          if (this.postDescription) {
            this.postDescription.textContent = "data not found try again";
          }
          break;
      }
    }
    if (manager instanceof CommentsManager) {
      // if (this.commentsContainer?.style.display !== "none") {
      //   this.commentsContainer!.style.display = "none";
      //   this.showCommentsButton!.textContent = "View Comments";
      // } else {
      //   this.commentsContainer.style.display = "block";
      //   this.showCommentsButton!.textContent = "Hide Comments";
      const comments = manager.getCommentsForPost(manager.curPostId);
      switch (manager.modelStatus.getModelStatus()) {
        case "available":
          if (!fetched) {
            this.commentsContainer!.style.display =
              this.commentsContainer?.style.display === "none"
                ? "block"
                : "none";
            this.showCommentsButton!.textContent =
              this.commentsContainer?.style.display === "none"
                ? "View Comments"
                : "Hide Comments";
          }
          fetched = false;

          if (this.commentsContainer !== null) {
            this.commentsContainer.innerHTML =
              ((`<h3>${comments?.length} comments</h3><br>` +
                comments
                  ?.map(
                    (comment) =>
                      `<p><b>${comment.email}</b></p><p>${comment.body}</p> <br>`
                  )
                  .join(" ")) as string) || "body is missing";
          }

          break;
        case "pending":
          fetched = false;
          console.log(this.commentsContainer?.style.display);
          this.commentsContainer!.style.display =
            this.commentsContainer?.style.display === "none" ? "block" : "none";
          this.showCommentsButton!.textContent =
            this.commentsContainer?.style.display === "none"
              ? "View Comments"
              : "Hide Comments";
          fetched = true;

          if (this.commentsContainer !== null) {
            this.commentsContainer.innerHTML = "Loading.....";
          }
          break;
        case "failure":
          if (this.commentsContainer !== null) {
            this.commentsContainer.innerHTML = "data not found try again";
          }
          break;
      }

      // if (this.commentsContainer !== null) {
      //   this.commentsContainer.innerHTML = comments
      //     ?.map(
      //       (comment) =>
      //         `<p><b>${comment.email}</b></p><p>${comment.body}</p> <br>`
      //     )
      //     .join(" ") as string;
      // } else {
      //   console.log("not found");
      // }
      // if (this.postDescription) {
      //   this.postDescription.textContent = post?.body ?? "body is missing";
      // }
    }
  }
}
