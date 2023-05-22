import { PostData } from "../../data";

type Props = { post: PostData };

export const Post = ({ post }: Props) => {
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.tags}</div>
      <div>{post.reactions}</div>
      <div>{post.body}</div>
    </div>
  );
};
