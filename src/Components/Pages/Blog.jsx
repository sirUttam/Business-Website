import React from 'react'
import BlogHero from '../PageComponents/Blog/BlogHero'
import BlogBanner from '../PageComponents/Blog/BlogBanner'

function Blog() {
  return (
    <div className='flex flex-col gap-20 mb-25' >
      <BlogBanner/>
      <BlogHero/>
    </div>
  )
}

export default Blog