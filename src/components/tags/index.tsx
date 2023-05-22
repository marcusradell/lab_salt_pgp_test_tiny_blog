import { ReactNode, useState } from "react";
import { TagsData } from "../../data";

type Props = {
  tags: TagsData;
  render: (args: { selectedTag: string | null }) => ReactNode;
};

export const Tags = ({ tags, render }: Props) => {
  const [selectedTag, selectTag] = useState<string | null>(null);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {Object.entries(tags)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .sort(([_, countA], [__, countB]) => countB - countA)
          .map(([name, count], index) => {
            return (
              <div
                key={name}
                onClick={() => selectTag(name)}
                style={{
                  background: selectedTag === name ? "pink" : "",
                  color: index <= 5 ? "black" : "grey",
                }}
              >
                <span>{name}</span>
                <span>{count}</span>
              </div>
            );
          })}
      </div>
      {render({ selectedTag })}
    </div>
  );
};
