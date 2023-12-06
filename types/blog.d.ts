export interface Post {
  content: string,
  created_at: Date,
  updated_at: Date,

  [key: string]: string | object | undefined
}
