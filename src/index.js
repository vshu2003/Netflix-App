import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import All from './All_cards';
// import Footer from './Footer';
import Amazon from './Amazon';
import Netflix from './Netflix';

const fav = 'netflix';

const FavSeries = () =>
{
  if(fav==="netflix")
  return <Netflix/>
  else
  return <Amazon/>
};

ReactDOM.render(
 
 <>
  <h1 className='heading_style'>Netflix Originals</h1>
  <FavSeries/>
 </>
  , document.getElementById('root')
);

