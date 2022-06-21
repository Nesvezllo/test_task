import s from './item.module.scss';
import React,{useEffect} from 'react'

import {ReactComponent as Arrow} from '../assets/arrow.svg'

import Popup from '../popup/Popup'

  const Item = ({name, img}) => {
    const [open, setOpen] = React.useState(false)
    const refName = React.useRef()
    const refImg = React.useRef()

    const onBuy = () => {
      window.localStorage.setItem("name", refName.current.innerHTML)
      window.localStorage.setItem("img", refImg.current.src)
      console.log(window.localStorage);
      setOpen(!open)
  }
  return (
    <div className={s.item}>
      <img src={img} alt="" ref={refImg} />
      <p ref={refName} >{name}</p>
      <div className={s.btnBlock}>
        <button className={s.btn} onClick={() => onBuy()}>
          <p>Купить</p>
          <Arrow />
        </button>
      </div>
      {open && <Popup setOpen={setOpen} open={open} />}
    </div>
  )
}

export default Item;