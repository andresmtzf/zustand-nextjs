import { useStore } from '@/store/store'

export default function Post() {
  const { post } = useStore()

  return (
    <section className='bg-[#0DD3CF] rounded-3xl'>
      <div className='lg:order-first'>
        <div className='flex flex-col'>
          <div className='p-8 rounded-3xl bg-[#0DD3CF] ring-1 ring-white/10 shadow-sm'>
            <div className='flex justify-between'>
              <div className='flex items-center gap-3'>
                <svg
                  className='w-8 h-8 text-black rounded-full'
                  viewBox='0 0 280 280'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <rect width='280' height='280' rx='32' fill='#d1cfdf'></rect>
                  <g clipPath='url(#clip0_501_1489)'>
                    <path
                      d='M196.064 183.936L152.127 140L196.064 96.0636L240 140L196.064 183.936ZM83.9364 183.936L40 140L83.9364 96.0636L127.873 140L83.9364 183.936ZM140 240L96.0636 196.064L140 152.127L183.936 196.064L140 240ZM140 127.873L96.0636 83.9364L140 40L183.936 83.9364L140 127.873Z'
                      fill='currentColor'></path>
                  </g>
                  <defs>
                    <clipPath id='clip0_501_1489'>
                      <rect
                        width='200'
                        height='200'
                        fill='white'
                        transform='translate(40 40)'></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className='text-neutral-800 font-semibold'>{post?.title}</p>
              </div>
              <p>
                <span className='text-lg font-medium text-neutral-800 uppercase lg:text-xl'>
                  {post?.reactions.likes}
                </span>
                <span className='text-base font-medium ttext-neutral-700'> likes</span>
              </p>
            </div>
            <p className='mt-8 text-sm font-medium text-neutral-800'>{post?.body}</p>
            {/* <div className='flex mt-6'>
              <a
                className='items-center justify-between inline-flex w-full font-medium py-2.5 text-center text-neutral-800 duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black'
                href='#'>
                Get starter <span>→</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
