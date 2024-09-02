import React from 'react'
import web from "./assets/images/webdev.png"
import imgpro from "./assets/images/imgpro.png"
import flutter from "./assets/images/flutter.png"
import prog from "./assets/images/programming.png"
const Skills = () => {
  return (
    <div className=" mt-48" id="1003">
    <p className="text-black text-5xl text-center mt-12 mb-8 bg-blue-500 pt-5 pb-5 font-bold">Discpilnes</p>
    <div className="flex justify-center mt-8 ">
        <div>
            <div className="border-solid border-white border text-white font-bold text-4xl h-80 p-8">
                <p>Web Development</p>
                <img src={web} alt="" className="bg-white p-2 w-24 h-24 mt-8 ml-32 "/>
            </div>
            <div className="border-solid border-white border text-white font-bold  text-4xl h-80 p-8">
                <p className="mt-2">Image Processing</p>
                <img src={imgpro} alt="" className="bg-white p-2 w-24 h-24 mt-8 ml-32"/>
            </div>
        </div>
            <div>
                <div className="border-solid border-white text-white font-bold  text-4xl border  h-80 p-8">
                    <p className="mt-2">Flutter Development</p>
                    <img src={flutter} alt="" className="bg-white p-2 w-24 h-24 mt-8 ml-32"/>
                </div>
                <div className="border-solid border-white text-white font-bold  text-4xl border h-80 p-8">
                    <p className="mt-2">Programming</p>
                    <img src={prog} alt="" className="bg-white p-2 w-24 h-24 mt-8 ml-32"/>
                </div>
            </div>
        
    </div>
</div>
  )
}

export default Skills