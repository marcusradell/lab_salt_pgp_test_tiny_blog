import { TagsData } from "../types";
import { data } from "./data";
export * from "./data";

const delay = <T>(data: T) =>
  new Promise<T>((resolve) =>
    setTimeout(() => resolve(data), 200 + Math.random() * 1000)
  );

export const createApi = () => {
  const tags = data.posts
    .flatMap(({ tags }) => tags)
    .reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = 0;
      }

      acc[val] += 1;

      return acc;
    }, {} as TagsData);

  return {
    tags: {
      getAll: () => delay(tags),
    },
    posts: {
      getAll: () => delay(data.posts),
    },
  };
};
