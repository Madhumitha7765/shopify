import React from 'react'

export default function Filter(props) {
    return (
        
    <div className="filter">
        <div className="filter-result">
          {props.count} Products
        </div>
        <div className="filter-sort">
          Order{" "}
          <select value={props.size}
                  onChange={props.sortproducts}  
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select value={props.size} 
            onChange={props.filterproducts}  
       
          >
            <option value="">ALL</option>
            <option value="Furniture">Furniture</option>
            <option value="Essentials">Essentials</option>
            <option value="Snack">Snack</option>
            <option value="Clothing">Clothing</option>
            <option value="Edibles">Edibles</option>
          </select>
        </div>
      </div>
    );
        
}

