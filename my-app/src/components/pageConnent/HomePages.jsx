import React from 'react'
import Home from "../home/homes/Home"
import Branding from "../home/work/Branding"
import About from '../home/about/About'
import Service from '../home/services/Service'
import Wrapper from '../home/work/Wrapper'
import Skill from '../home/work/Skill'
import WrapperOne from '../home/work/WrapperOne'
import Work from '../home/work/Work'
import Blog from '../home/blog/Blog'

const HomePages = () => {
  return (
    <>
      <Home/>
      <Branding/>
      <About/>
      <Service/>
      <Wrapper/>
      <Skill/>
      <WrapperOne/>
      <Work/>
      <Blog/>
    </>
  )
}

export default HomePages
