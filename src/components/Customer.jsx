import React, { useRef } from 'react'
import "../stylesheets/Customer.css"
import { animate , motion } from 'framer-motion'

const Customer = () => {

const customerProvider = useRef(null)
const happycustomerProvider = useRef(null)
const tachniciansProvider = useRef(null)
const dekstopProvider = useRef(null)

const customerPro = () => {
    animate(0,2500,{
        duration:2,
        onUpdate:(v)=>(customerProvider.current.textContent = v.toFixed())
    })
}
const happycustomerPro = () => {
    animate(0,1750,{
        duration:2,
        onUpdate:(v)=>(happycustomerProvider.current.textContent = v.toFixed())
    })
}
const techniciansPro = () => {
    animate(0,150,{
        duration:2,
        onUpdate:(v)=>(tachniciansProvider.current.textContent = v.toFixed())
    })
}
const desktopPro = () => {
    animate(0,3550,{
        duration:2,
        onUpdate:(v)=>(dekstopProvider.current.textContent = v.toFixed())
    })
}

  return (
    <div id='customer'>
        <div className="container">
            <div className="box">
                <motion.h1 ref={customerProvider} whileInView={customerPro}></motion.h1>
                <hr />
                <span>Customer</span>
            </div>
            <div className="box">
                <motion.h1 ref={happycustomerProvider} whileInView={happycustomerPro}></motion.h1>
                <hr />
                <span>Happy Customer</span>
            </div>
            <div className="box">
                <motion.h1 ref={tachniciansProvider} whileInView={techniciansPro}></motion.h1>
                <hr />
                <span>Export Technicians</span>
            </div>
            <div className="box">
                <motion.h1 ref={dekstopProvider} whileInView={desktopPro}></motion.h1>
                <hr />
                <span>Desktop Reaired</span>
            </div>
        </div>
    </div>
  )
}

export default Customer