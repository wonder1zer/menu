import React,{useState} from 'react'
import Data from './data.js'
import Menu from './Menu'
import Categories from './Categories'
const allCategories = ['all', ...new Set(Data.map((el) => el.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(Data)
  const [categories, setCategories] = useState(allCategories);
  

  const filterData = (category) => {
    if (category === 'all') {
      setMenuItems(Data);
      return;
    }
    const newData = Data.filter(el => el.category === category);
    setMenuItems(newData);
  };


  return (
    <div className="App">
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
    </section>
    <Categories categories={categories} filterData={filterData} />
    <Menu menuItems={menuItems} />
  </div>
)}

export default App
