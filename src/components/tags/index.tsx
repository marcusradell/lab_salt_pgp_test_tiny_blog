import { FC, useState } from "react";
import { TagsData } from "../../data";

type Props = {
  tags: TagsData;
  render: (args: { selectedTag: string | null }) => any;
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
