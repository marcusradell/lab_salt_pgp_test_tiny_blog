import { data, TagsData } from "./data";
import { Post, Tags } from "./components";

function App() {
  const tags = data.posts
    .flatMap(({ tags }) => tags)
    .reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = 0;
      }

      acc[val] += 1;

      return acc;
    }, {} as TagsData);

  return (
    <>
      <Tags tags={tags} />
      {data.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
