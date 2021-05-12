import React from "react";

//importing comps
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
      <div classname="grid-container">
              <header>
                 <a href="/" >React shopping cart</a>
              </header>
              <main>
                <div className="content">
                  <div className="main">
                     <Filter ></Filter>
                     <Products ></Products>
            </div>
            <div className="sidebar">
              <Cart  />
                  </div>
                 
                </div>              
              </main>
           
      </div>  
      </Provider>
    );

  }
 
}

export default App;
