import React from 'react'
import S from './Img.module.css'

const Img = () => {
  return (
    <div className={S.imgCtn}><img className={S.img} src="https://img.itdg.com.br/tdg/images/recipes/000/043/127/242114/242114_original.jpg" alt="" /></div>
  )
}

export default Img