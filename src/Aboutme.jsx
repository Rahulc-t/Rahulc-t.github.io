import React from 'react'
import whatsapp from './assets/images/whatsapp.png'
import reddit from './assets/images/reddit.png'
import instaa from './assets/images/instaa.png'
import gmail from './assets/images/gmail.png'
import linkedin from './assets/images/linkedin.png'
import git from './assets/images/git.png'


const Aboutme = () => {
  return (
    <div className="flex">
    <div className="ml-24 mt-12 p-5 text-white w-1/3">
        <table>
            <tr>
                <td>
                    <img src={whatsapp} alt="" className="w-12 h-12"/>
                </td>
                <td className="text-white text-xl font-bold">+919544349209</td>
            </tr>
            <tr>
                <td>
                    <img src={reddit} alt="" className="w-12 h-12"/>
                </td>
                <td className="text-white text-xl font-bold"> kingedcloud</td>
            </tr>
            <tr>
                <td><img src={instaa} alt="" className="w-12 h-12"/></td>
                <td className="text-white text-xl font-bold">rahul_ct</td>
            </tr>
        </table>
    </div>
    <div className="mt-12 text-center text-white text-xl font-bold p-5 w-1/3">
        <p>AMMA(H) Puthuvaridath Meethal</p>
        <p>Chathamangalam PO</p>
        <p>PIN:673601</p>
        <p>Kozhikode</p>
        <p>Kerala</p>
        <p>PH:9544349209</p>
    </div>
    <div className="ml-24 mt-12 p-5 text-white w-1/3">
        <table>
            <tr>
                <td><img src={gmail} alt="" className="w-12 h-12"/></td>
                <td className="text-white text-xl font-bold">rahulct500@gmail.com</td>
            </tr>
            <tr>
                <td>
                    <img src={linkedin} alt="" className="w-12 h-12"/>
                </td>
                <td className="text-white text-xl font-bold"> Rahul C T</td>
            </tr>
            <tr>
                <td>
                    <img src={git} alt="" className="w-12 h-12"/>
                </td>
                <td className="text-white text-xl font-bold">rahul</td>
            </tr>
        </table>
    </div>
</div>
  )
}

export default Aboutme