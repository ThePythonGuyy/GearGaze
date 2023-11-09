"use client"
import React from 'react'
import styles from '@/Styles/button.module.css'
import Image from 'next/image'

const ButtonBlue = ({title, handleClick, style_btn, stylesOverride, btn_icon}) => {
  
  return (
    <button
        className={style_btn==='button_blue'? styles.button_blue : styles.button_white}
        style={stylesOverride ? stylesOverride : {}}
        disabled={false}
        type={'button'}
        onClick={handleClick}
    >
      {title}
      {btn_icon ? btn_icon() : null}
    </button>
  )
}



export default ButtonBlue
