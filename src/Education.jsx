import React from 'react'
import graduation from './assets/images/graduation.png'

const Education = () => {
  return (
    <div className="mt-48 text-center" id="1002">
    <p className="text-black text-5xl text-center mt-12 mb-8 bg-blue-500 pt-5 pb-5 font-bold"> Education</p>
    <span className="p-4 text-white text-xl bg-slate-400 rounded-3xl">2017</span>
    <section className="border-solid border-white border h-32 text-white text-center mr-auto ml-auto mt-8 mb-10 p-2 text-xl rounded-3xl w-2/6">
        <img src={graduation} alt="" className="bg-white p-2 float-left"/> 
        <p>Secondary School</p>
        <p>Kendriya Vidyalaya No1 Calicut</p>
        <p>CBSE</p>
        <p>CGPA: 9.8</p>
        
    </section>
    <span className="p-4 text-white text-xl bg-slate-400 rounded-3xl">2019</span>
    <div className="border-solid border-white border h-32 text-white text-center mr-auto ml-auto mt-8 mb-10 p-2 text-xl rounded-3xl w-2/6">
        <img src={graduation} alt="" className="bg-white p-2 float-left"/> 
        <p>Higher Secondary School</p>
        <p>Kendriya Vidyalaya No1 Calicut</p>
        <p>CBSE</p>
        <p>Percentage: 86</p>
    </div>
    <span className="p-4 text-white text-xl bg-slate-400 rounded-3xl">2023</span>
    <div className="border-solid border-white border h-32 text-white text-center mr-auto ml-auto mt-8 mb-10 p-2 text-xl rounded-3xl w-2/6">
        <img src={graduation} alt="" className="bg-white p-2 float-left"/> 
        <p>Higher Secondary</p>
        <p>TKM College Of Engineering</p>
        <p>KTU</p>
        <p>GPA: 7.2</p>
    </div>
    
</div>
  )
}

export default Education