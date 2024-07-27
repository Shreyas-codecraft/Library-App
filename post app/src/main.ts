import { PostsView } from "./post-view";
import { PostManager, CommentsManager } from "./post-model";
import { PostController } from "./post-controller";

const postView = new PostsView();
const postManager = new PostManager();
const commentsManager = new CommentsManager();
const postController = new PostController(
  postView,
  postManager,
  commentsManager
);

// postController.fetchPosts();
//Controller is yet to be created
//Create the view,model and controller and set up the relationship
// const postController = new PostController(postView, postManager);
postManager.subscribe(postView);
commentsManager.subscribe(postView);

//setTimeout(() => postManager.setPosts(testPosts), 2000);
