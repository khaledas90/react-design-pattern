import { Post } from "../Bad/FeatchPostList";
import FeatcherData from "./FeatcherData";

export default function PostsList() {
  return FeatcherData({
    url: "https://jsonplaceholder.typicode.com/posts",
    render: (data: Post | null, isLoading) => {
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
      return (
        <div>
          <h1>Posts List : </h1>
          {Array.isArray(data) &&
            data?.map((post: Post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))}
        </div>
      );
    },
  });
}
