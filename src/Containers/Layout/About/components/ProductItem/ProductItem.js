import React from 'react';

import './product-item.css';

const ProductItem = (props) => {
  const {item, id} = props;
  return (
      <div className="user-container">
          <div className="card hovercard">
              <img src={`http://lorempixel.com/240/180/technics/${id}`} alt=""/>
              <div className="avatar">
                  <img src={`http://lorempixel.com/72/72/technics/${id}`} alt="" />
              </div>
              <div className="info">
                  <div className="title">{item} </div>                  
              </div>
          </div>
      </div>
      );
}

export default ProductItem;
