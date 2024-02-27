import React from 'react'
import img1 from './images/1.png'
import img2 from './images/2.png'
import style from './main.module.css'
const Award = () => {
  return (
    <div id={style.container1}>
      <img id={style.img1} src={img1} alt="" />
      <section>
        <p id={style.p1}>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
        <ul>
          <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
        </ul>
        <img id={style.img2} src={img2} alt="" />
        <p id={style.p2}>Government of India has awarded the <b> "National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
      </section>
    </div>
  )
}

export default Award