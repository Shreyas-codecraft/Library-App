import { ActualPublisher } from "./pub-sub";
import { MOdelStatus } from "./model-status";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface PostsModel {
  posts: Post[];
  currentPostIndex: number;
  currentPost: () => Post | undefined;
}

export interface CommentsModel {
  commentsMap: Map<number, Comment[]>;
  insertCommentsForPost: (Comments: Comment[], postId: number) => void;
  getCommentsForPost: (postId: number) => Comment[] | undefined;
}
/** Interface for the publisher */

export class PostManager extends ActualPublisher implements PostsModel {
  public currentPostIndex: number = 0;
  public posts: Post[] = [];
  public modelStatus = new MOdelStatus(this);
  currentPost(): Post | undefined {
    return this.posts[this.currentPostIndex];
  }
  setPosts(posts: Post[]) {
    this.posts = posts;
    this.modelStatus.setModelStatus("available");
  }
  getPosts() {
    return this.posts;
  }
}
export class CommentsManager extends ActualPublisher implements CommentsModel {
  public commentsMap: Map<number, Comment[]> = new Map();
  public modelStatus = new MOdelStatus(this);

  public curPostId: number = 1;

  insertCommentsForPost(Comments: Comment[], postId: number) {
    this.commentsMap.set(postId, Comments);
    this.modelStatus.setModelStatus("available");
  }
  getCommentsForPost(postId: number) {
    return this.commentsMap.get(postId);
  }
}
