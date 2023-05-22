export type PostData = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

export type TagsData = { [name: string]: number };
