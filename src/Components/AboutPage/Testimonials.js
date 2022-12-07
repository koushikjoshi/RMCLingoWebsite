import React from 'react'
import { TestimonialSlider } from './AboutPageCommonComponents/TestimonialSlider'
import "./Testimonials.css"
export const Testimonials = () => {
  return (
    <div className='testimonial-container'>
        <div className='Heading'>
           <h1 className='testimonialheading'>Student Testimonials</h1>
        </div>
        <div className='container-md testimonail'>
            <TestimonialSlider/>
        </div>
        
        </div>
  )
}
