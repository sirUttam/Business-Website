import React from 'react'
import BlogCard from './BlogCard'
import blogIMG from '../../../assets/blogIMG.jpg'

function BlogHero() {
    const blogCardArr = [
        {
            imageName: blogIMG, subTitle:"Business", imageTitle:"How to Start a Business: A Step-by-Step Guide"
        },{
            imageName: blogIMG, subTitle:"Commerce", imageTitle:"Taylor Life in Other Word"
        },{
            imageName: blogIMG, subTitle:"DropShip", imageTitle:"develop your Idea in Word"
        },{
            imageName: blogIMG, subTitle:"HelloWorld", imageTitle:"How To Choose The Best Web Development Company"
        },
    ]
  return (
    <div className='w-11/12 mx-auto'>
        <div className='grid grid-cols-2 gap-8'>
            {
                blogCardArr.map((val,i)=>{
                    return(
                        <BlogCard image={val.imageName} sub={val.subTitle} title={val.imageTitle}/>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default BlogHero