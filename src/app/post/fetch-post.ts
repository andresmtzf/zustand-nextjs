export async function FetchPost() {
  const res = await fetch('https://dummyjson.com/posts/1/?delay=3000', {
    cache: 'no-store',
  })
  /* .then((res) => res.json())
    .then(console.log) */

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
