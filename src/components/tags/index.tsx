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
      <div>
        {Object.entries(tags).map(([name, count]) => {
          return (
            <div
              key={name}
              onClick={() => selectTag(name)}
              style={selectedTag === name ? { background: "pink" } : {}}
            >
              <div>{name}</div>
              <div>{count}</div>
            </div>
          );
        })}
      </div>
      {render({ selectedTag })}
    </div>
  );
};
