import React from 'react'
import style from './main.module.css'
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
  return (
    <div id={style.container3}>
      <center>
      <p><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p></center>
      <center>
      <p id={style.service}>CHEMICALS & PROCESS <b>|</b> POWER <b>|</b> WATER & WASTE WATER <b>|</b> OILS & GAS <b>|</b> PHARMA <b>|</b> SUGARS & DISTILLERIES <b>|</b> PAPER & PULP <b>|</b> MARINE & DEFENCE <b>|</b> METAL & MINING <b>|</b> FOOD & BEVERAGE <b>|</b> PETROCHEMICAL & REFINERIES <b>|</b> SOLAR <b>|</b> BUILDING <b>|</b> HVAC <b>|</b> FIRE FIGHTING <b>|</b> AGRICULTURE & RESIDENTIAL</p>
      </center>
      <section id={style.section}>
        <section id={style.toll}>
        <IoCallOutline />
        <p>toll free 1800 200 1234</p>
        </section>

        <section id={style.facebook}>
        <FaFacebook  />
        <a href='https://www.facebook.com/cripumps' rel="noreferrer" target={'_blank'}>www.facebook.com/cripumps</a>
        </section>

        <section id={style.website}>
        <CiGlobe />
        <a href="https://www.crigroups.com" rel="noreferrer" target={'_blank'}>www.crigroups.com</a>
        </section>
      </section>
    </div>
  )
}

export default Footer