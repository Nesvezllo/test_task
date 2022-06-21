import s from './popup.module.scss';

import React from 'react'
import PhoneInput from 'react-phone-number-input'

import close from '../assets/close.png';

const Popup = ({setOpen, open}) => {
  const [data, setData] = React.useState({
    name: '',
    tel: '+7',
  })
  const itemName = window.localStorage.name;
  const image = window.localStorage.img;
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
    console.log(data);
}
  const SubmitForm = (e) => {
    e.preventDefault();

    const submitData = {
      name: data.name,
      tel: data.tel,
  }
  console.log(submitData);
  }
  return (
    <div className={s.wrapper}>
        <div className={s.popup}>
            <img src={close} alt="" onClick={() => setOpen(!open)}/>
            <h1>Оформить заказ</h1>
            <form onSubmit={SubmitForm}>
                <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Имя" />
                <input 
                  type="tel" 
                  name="tel"
                  value={data.tel} 
                  onChange={handleChange} 
                  placeholder="Телефон"
                  pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
                  maxlength="12"
                   />
                <div className={s.itemBlock}>
                  <h2>Ваш заказ: </h2>
                  <p>{itemName}</p>
                  <img src={image} alt="" className={s.image}/>
                </div>
                <button>Оформить</button>
            </form>
        </div>
    </div>
  )
}

export default Popup;