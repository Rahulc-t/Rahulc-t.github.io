import React from 'react'
import coverPic from './assets/images/IMG_20220513_194018_814-modified.jpg'

const First = () => {
  return (
    <div className="flex">
        <div className="w-2/6 mt-12 text-center">
            <a href="#1001"><input type="button" value="Home" className="block text-3xl m-16 p-0 h-16 w-64 bg-white"/></a>
			<a href="#1002"><input type="button" value="Education" className="block text-3xl m-16 p-0 h-16 w-64 bg-white"/></a>
			<a href="#1003"><input type="button" value=" Disiplines" className="block text-3xl m-16 p-0 h-16 w-64 bg-white"/></a>
			<a href="#1004"><input type="button" value=" Projects" className="block text-3xl m-16 p-0 h-16 w-64 bg-white"/></a>
			<a href="#1005"><input type="button" value="contact Me" className="block text-3xl m-16 p-0 h-16 w-64 bg-white"/></a>
        </div>
        <div className="items-center m-16 mt-12 w-2/6" id="1001">
            <p className="text-3xl font-bold text-white">About Me</p><br/>
            <p className="text-white text-xl text-justify">Driven by a relentless curiosity and a commitment to excellence, I have honed my skills over years of experience in the field. My journey began with a fascination for the inner workings of computers and a desire to harness their potential to transform ideas into reality. Through continuous learning and hands-on experience, I have evolved into a versatile professional adept at navigating the ever-changing landscape of technology.</p>
            <p className="text-white text-xl text-justify">As a computer engineer, I specialize in designing and implementing robust, scalable solutions that address complex challenges. Whether it's developing software applications, optimizing system performance, or architecting reliable infrastructure, I approach each project with a meticulous attention to detail and a passion for innovation.</p>
        </div>
        <div className="w-2/6 ml-8 mt-12">
            <p className="text-8xl text-white font-extrabold">RAHUL.</p>
            <img src={coverPic} alt="" className="mr-10 mt-12 w-full"/>
        </div>
    </div>
  )
}

export default First