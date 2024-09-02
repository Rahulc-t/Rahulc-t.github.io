import React from 'react'

const AboutmeForm = () => {
  return (
    <div className="mt-24" id="1005">
    <p className="text-black text-5xl text-center mt-12 mb-8 bg-blue-500 pt-5 pb-5 font-bold">CONTACT ME</p>
    <div className="mt-24 mb-24 text-white text-xl flex justify-center">
        <form className="space-y-5">
            <div className="flex flex-col">
            <label>Name:</label>
            <input type="text" className="w-[400px] h-[30px] p-2" placeholder="Your name"/>
            </div>
            <div className="flex flex-col">
            <label>Email:</label>
            <input type="email" className="w-[400px] h-[30px] p-2" placeholder="sample@mail.com"/>
            </div>
            <div className="flex flex-col">
            <label>Feedback</label>
            <textarea name="" id="" className="w-[700px] h-[150px] p-2" placeholder="Your Message"></textarea>
            </div>
            <input type="submit" value="Submit" className="w-[100px] h-[50px] rounded-lg bg-blue-500"/>
        </form>
    </div>
</div>
  )
}

export default AboutmeForm