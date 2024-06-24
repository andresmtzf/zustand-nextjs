import { create } from 'zustand'

export interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Reactions
  views: number
  userId: number
}

export interface Reactions {
  likes: number
  dislikes: number
}

type StoreState = {
  post: Post | null
  setPost: (post: Post) => void
}

export const useStore = create<StoreState>()((set) => ({
  post: null,
  setPost: (post) => set(() => ({ post: post })),
}))
