'use client'

import { Post as PostTypeResponse, useStore } from '@/store/store'
import Post from './post'
import { useEffect, useState } from 'react'

type PostType = {
  post: PostTypeResponse
}

export default function ContainerPost({ post }: PostType) {
  /*   const [postResponse, setPostResponse] = useState(post!) */

  /* console.log('post:', postResponse) */

  const { setPost } = useStore()

  useEffect(() => {
    setPost(post)
  }, [setPost, post])

  return (
    <div className='container mx-auto'>
      <div className='grid gap-4 grid-cols-3 grid-rows-3'>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
