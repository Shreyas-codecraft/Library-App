import { Post, Comment, PostManager, CommentsManager } from "./post-model";
import { PostsView } from "./post-view";
import { getComments, getPosts } from "./service";

export class PostController {
  constructor(
    postView: PostsView,
    postManager: PostManager,
    commentsManager: CommentsManager
  ) {
    function handlePrevious(): void {
      postView.commentsContainer!.style.display = "none";
      postView.showCommentsButton!.textContent = "View Comments";
      if (postManager.currentPostIndex === 0) {
        return;
      }
      postManager.currentPostIndex--;
      commentsManager.curPostId--;

      postManager.updateSubscribers();
    }
    function handleNext(): void {
      postView.commentsContainer!.style.display = "block";
      postView.showCommentsButton!.textContent = "View Comments";
      if (postManager.currentPostIndex === postManager.posts.length - 1) {
        return;
      }
      postManager.currentPostIndex++;
      commentsManager.curPostId++;
      postManager.updateSubscribers();
    }
    const handleComments = (): void => {
      if (commentsManager.commentsMap.get(postManager.currentPostIndex + 1)) {
        commentsManager.updateSubscribers();
        return;
      } else {
        commentsManager.modelStatus.setModelStatus("pending");

        getComments<Comment>(
          `https://jsonplaceholder.typicode.com/comments?postId=${
            postManager.currentPostIndex + 1
          }`
        )
          .then((comments) => {
            commentsManager.insertCommentsForPost(
              comments,
              postManager.currentPostIndex + 1
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    // We need to add PostView as a subscriber to model
    postManager.subscribe(postView);
    // Setup events handlers for previous and next buttons
    postView.nextButton?.addEventListener("click", handleNext);
    postView.prevButton?.addEventListener("click", handlePrevious);
    postView.showCommentsButton?.addEventListener("click", handleComments);
    postManager.modelStatus.setModelStatus("pending");

    this.fetchPostsOrComments<Post>(
      "https://a698b7c6-fd9e-4abd-b5e1-824480b198dc.mock.pstmn.io/posts"
    )
      .then((posts) => postManager.setPosts(posts))
      .catch(() => {
        postManager.modelStatus.setModelStatus("failure");
      });
  }

  async fetchPostsOrComments<T>(URL: string): Promise<T[]> {
    try {
      const response = await fetch(URL);
      const commentsOrPosts = (await response.json()) as T[];
      const delay = (timeout: number) =>
        new Promise((resolve) => setTimeout(resolve, timeout));
      await delay(2000);
      return commentsOrPosts;
    } catch {
      throw new Error("Could not fetch for now, please try again later");
    }
  }
}
