import s from './App.module.scss';

import Item from './item/Item'


function App() {
  const catalog = [
    {
      name: "Одежда",
      img: require('./assets/clothes.png'),
    },
    {
      name: "Обувь",
      img: require('./assets/shoes.png'),
    },
    {
      name: "Аксессуары",
      img: require('./assets/pack.png')
    },
    {
      name: "Средства для ухода",
      img: require('./assets/laundry.png')
    }
  ]
  return (
    <div className={s.App}>
      <header>
        <h1>Market</h1>
      </header>
      <div className={s.itemsBlock}>
        {catalog.map((item, index) => (
          <Item key={index} name={item.name} img={item.img}/>
        ))}
      </div>
    </div>
  );
}

export default App;
