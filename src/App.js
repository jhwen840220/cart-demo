import React, { useState } from 'react';
import './App.css';
import basketComponentsFactory from './components/basketComponentsFactory';
import { ThemeProvider } from 'emotion-theming'
import basketProducts from './fakeData/basketProducts.json'

const App = () => {
  const [basketProductData, setBasketProductData] = useState({});
  const {
    BasketProductList,
  } = basketComponentsFactory.getComponents();

  const handleToggleData = (groupType) => {
    const result = {...basketProductData};
    if (Object.keys(result).indexOf(groupType) === -1) {
      setBasketProductData({...result, [groupType]: basketProducts[groupType]});
    }
    else {
      delete result[groupType];
      setBasketProductData(result)
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <button onClick={()=>{handleToggleData('0')}}>無規格商品</button>
        <button onClick={()=>{handleToggleData('Campaign_P')}}>M件N元(Campaign_P)</button>
        <button onClick={()=>{handleToggleData('Campaign_GG')}}>滿額加價購(Campaign_GG)</button>
        <button onClick={()=>{handleToggleData('Campaign_GT')}}>滿額贈(Campaign_GT)</button>
        <BasketProductList data={{ basketProducts: basketProductData }} />
      </ThemeProvider>
    </div>
  );
}

export default App;

const theme = {
};
