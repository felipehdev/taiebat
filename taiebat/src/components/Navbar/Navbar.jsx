import React from 'react'
import S from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={S.nav}>
        <div className={S.navDiv}>
            <h1 className={S.h1}>طيبات</h1>
        </div>
    </nav>
  )
}

export default Navbar