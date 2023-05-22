import { useEffect, useState } from "react";
import { createApi } from "./api";
import { Post, Tags } from "./components";
import { PostData, TagsData } from "./types";
import { Async } from "./components/async";

const api = createApi();

type LoadingState = { status: "LOADING" };

type OkState = { status: "OK"; tags: TagsData; posts: PostData[] };

type State = LoadingState | OkState;

function App() {
  const [state, setState] = useState<State>({ status: "LOADING" });

  useEffect(() => {
    Promise.all([api.posts.getAll(), api.tags.getAll()]).then(
      ([posts, tags]) => {
        setState({ status: "OK", tags, posts });
      }
    );
  }, []);

  if (state.status === "LOADING") return <Async />;

  return (
    <>
      <Tags
        tags={state.tags}
        render={({ selectedTag }) => {
          return state.posts
            .filter(
              (post) => selectedTag == null || post.tags.includes(selectedTag)
            )
            .map((post) => <Post key={post.id} post={post} />);
        }}
      />
    </>
  );
}

export default App;
