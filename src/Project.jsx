import React from 'react'
import under from "./assets/images/Underwater-image-processing.webp"
import hostel from "./assets/images/worldarchitecture.jpeg"
const project = () => {
  return (
    <div className="text-white mt-48" id="1004">
        <p className="text-black text-5xl text-center mt-12 mb-8 bg-blue-500 pt-5 pb-5 font-bold">Projects</p>  
        <div className="flex justify-center">
        <div className="text-white">
            <img src={under} alt="" className="mt-8 mr-10 ml-10 w-[650px] h-[400px]"/>
            <div className="text-white bg-grey-900 h-64 mb-8 ml-10 mr-10 text-center w-[650px]">
                <p className="text-2xl font-bold p-2">Underwater Image Enhancement Using MLLE</p>
                <p className="text-white text-xl text-justify p-2">Underwater photography presents unique challenges due to the distortion and degradation caused by water's optical properties. In this project, we aim to improve the quality and clarity of underwater images using Machine Learning-based image enhancement techniques. By leveraging state-of-the-art algorithms and deep learning models, we seek to mitigate the effects of water-induced degradation and produce visually stunning underwater photographs with enhanced details and colors.</p>
            </div>
        </div>
        <div className="text-white">
            <img src={hostel} alt="" className="mt-8 mr-10 ml-10 w-[650px] h-[400px]"/>
            <div className="text-white bg-grey-900 h-64 mb-8 ml-10 mr-10 text-center w-[650px]">
                <p className="text-2xl font-bold p-2">Hosteller</p>
                <p className="text-white text-xl text-justify p-2">An android application designed to manage and monitor various functions and activities of a college hostel. the app facilitataes the easy connection between the admins and the students allowing for the smooth functioning of the hostel. the students can lodge complaints and make sure thatir complaints are acknowledged through the app. The admins can check the bills and inform the students of their existing bills and dues and can also send out messages informing students of any sudden changes</p>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default project