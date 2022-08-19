import React, {Component} from 'react';
import MenuMakanan from './Components/Menu/MenuMakanan/menuMakanan';
import MenuMinuman from './Components/Menu/MenuMinuman/menuMinuman';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaKantin: "Canteen SE",
    }
  }
  render(){
    return(
      <div className='App'>
        <h1 className='header-name-canteen-se'>{this.state.namaKantin}</h1>
        <h2 className='header-menu-makanan'>Menu Makanan</h2>
        <MenuMakanan namaMenu={"Ayam bakar"} hargaMenu={25000}/>
        <MenuMakanan namaMenu={"Bebek goreng"} hargaMenu={30000}/>
        <h2 className='header-menu-minuman'>Menu Minuman</h2>
        <MenuMinuman namaMenu={"Es teh manis"} hargaMenu={5000}/>
        <MenuMinuman namaMenu={"Es teh tarik"} hargaMenu={5500}/>
      </div>
    );
  }
}

export default App;
