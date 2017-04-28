import React, { Component } from 'react';
import ProductItem from './components/ProductItem/ProductItem';

const items = [
  {id: 1, name: "Some item"},
  {id: 2, name: "One more item"},
  {id: 3, name: "Third item"},
];


class About extends Component {

  //    


  render() {
    return (
        <div>
            <h2>About</h2>
            {
              items.map((item, idx) => (
                    <ProductItem
                        key={idx}
                        item={item.name}                                                 
                        id={item.id}                                                 
                        />
                        ))
            }  
        </div>
        );
  }
}

export default About;