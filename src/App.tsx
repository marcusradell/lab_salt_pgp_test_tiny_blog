import { data } from "./data";
import { Post } from "./components";

function App() {
  return (
    <>
      {data.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
