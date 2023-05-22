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
      <Tags
        tags={tags}
        render={({ selectedTag }) => {
          return data.posts
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
