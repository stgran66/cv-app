export type Service = {
  id: string;
  name: string;
  description: string;
};

export type Comment = {
  content: string;
  email: string;
  name: string;
};

export interface FullComment extends Comment {
  id: string;
  createdAt: string;
}
