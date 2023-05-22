import { TagsData } from "../../data";

type Props = { tags: TagsData };

export const Tags = ({ tags }: Props) => {
  return (
    <div>
      <div>
        {Object.entries(tags).map(([name, count]) => {
          return (
            <div key={name}>
              <div>{name}</div>
              <div>{count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
