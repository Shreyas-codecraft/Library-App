export async function fetchPostsOrComments<T>(URL: string): Promise<T[]> {
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
