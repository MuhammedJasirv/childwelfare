import React from 'react'
import NavBar from '../components/navigation/NavBar'
import Carousel from '../components/carousels/Carousel'
import LeftContent from '../components/leftContent/LeftContent'
import FooterContent from '../components/footerContent/FooterContent'
import CopyrightFooter from '../components/copyrightFooter/CopyrightFooter'

const Home = () => {
  return (
    <div className='bg-bg '>
        <NavBar/>
        <div className='flex flex-col lg:flex-row gap-2 p-4 px-4 lg:px-10'>
          <div className='w-full lg:w-[55%] '>
            <Carousel/>
          </div>
          <div className='w-full lg:w-[45%]'>
            <LeftContent/>
          </div>
        </div>
        <div className='lg:px-10 px-4 pb-10 mt-0 md:mt-3'>
          <FooterContent/>  
        </div>
        <CopyrightFooter/>
    </div>
  )
}

export default Home