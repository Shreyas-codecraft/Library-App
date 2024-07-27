import { fetchPostsOrComments } from "./network";

export function getPosts<T>(url: string): Promise<T[]> {
  return fetchPostsOrComments<T>(url);
}

export function getComments<T>(url: string) Promise<T[]> {
  return fetchPostsOrComments<T>(url);
}
