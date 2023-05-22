import { PostData } from "../../data";

type Props = { post: PostData };

export const Post = ({ post }: Props) => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>{post.title.toUpperCase()}</h2>
      <h3>{post.tags.join(" | ")}</h3>
      <h3>👍 {post.reactions}</h3>
      <p style={{ maxWidth: "50rem" }}>{post.body}</p>
    </div>
  );
};
