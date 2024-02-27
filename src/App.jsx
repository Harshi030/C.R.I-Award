import React from 'react'
import Header from './Components/Header'
import Award from './Components/Award'
import Equipment from './Components/Equipment'
import Footer from './Components/Footer'
import style from './Components/main.module.css'
const App = () => {
  return (
    <div id={style.main}>
      <Header/>
      <Award/>
      <Equipment/>
      <Footer/>
    </div>
  )
}

export default App