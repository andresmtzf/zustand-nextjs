import ContainerPost from './container-post'
import { FetchPost } from './fetch-post'

export default async function Page() {
  const post = await FetchPost()

  console.log(post)

  return <ContainerPost post={post} />
}
