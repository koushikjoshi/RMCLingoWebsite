import React from 'react'
import {BsFacebook, BsInstagram, BsPinterest, BsSearch, BsTwitter} from "react-icons/bs"
import "./Header.css"

export default function Header() {
  return (
    <div className='  header'>
        <div className=' header left'>
            <div className=' header-contact'>
                <i><BsSearch/></i>
                <p> +91 9810770128</p>

            </div>
            <div className='header-contact'>
                <i><BsSearch/></i>
                <p> +91 9810770128</p>

            </div>
            <div className='header-contact'>
                <i><BsSearch/></i>
                <p> +91 9810770128</p>

            </div>
        </div>
        <div className='header-right'>
            <div className='icon'>
                <i><BsFacebook/></i>
            </div>
            <div className='icon'>
                <i><BsTwitter/></i>
            </div>
            <div className='icon'>
                <i><BsInstagram/></i>
            </div>
            <div className='icon'>
                <i><BsPinterest/></i>
            </div>
        </div>


    </div>
  )
}
