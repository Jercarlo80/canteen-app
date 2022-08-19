import React, {Component} from 'react';
import MenuMakanan from './Menu/MenuMakanan/menuMakanan';
import MenuMinuman from './Menu/MenuMinuman/menuMinuman';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <h1 className='header-campus-se'>Canteen Campus SE</h1>
        <h2 className='header-menu-makanan'>Menu Makanan</h2>
        <MenuMakanan/>
        <h2 className='header-menu-minuman'>Menu Minuman</h2>
        <MenuMinuman/>
      </div>
    );
  }
}

export default App;
