import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>
                blogging social network
            </span>
            <span className='headerTitleLg'>
                Blogarista
            </span>
        </div>
        <img className='headerImg' 
        src='https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt=''
        />

    </div>
  )
}
