import React, {Component} from 'react';
import MenuMakanan from '../Components/Menu/MenuMakanan/menuMakanan';
import MenuMinuman from '../Components/Menu/MenuMinuman/menuMinuman';
import '../App/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaKantin: "Canteen SE",
      MenuMakanan: [
        {nama: 'Ayam bakar', harga: 25000, stock: 10},
        {nama: 'Bebek goreng', harga: 30000, stock: 12}
      ],
      MenuMinuman: [
        {nama: 'Es teh manis', harga: 5000, stock: 5},
        {nama: 'Es teh tarik', harga: 5500, stock: 3}
      ]
    }
  }
  handleGantiNama = (nama) => {
    this.setState({namaKantin: nama})
  }

  render(){
    return(
      <div className='App'> SELAMAT DATANG DI KANTIN FAKULTAS INFORMATIKA
        <h1 className='header-name-canteen-se'>{this.state.namaKantin}</h1>
        <button className='btn btn-primary' onClick={() => this.handleGantiNama("Canteen IF")}>Ganti jurusan kantin</button>
        <h2 className='header-menu-makanan'>Menu Makanan</h2>
        <MenuMakanan 
        namaMenu={this.state.MenuMakanan[0].nama} 
        hargaMenu={this.state.MenuMakanan[0].harga}
        stock={this.state.MenuMakanan[0].stock}  
        />
        <MenuMakanan 
        namaMenu={this.state.MenuMakanan[1].nama} 
        hargaMenu={this.state.MenuMakanan[1].harga}
        stock={this.state.MenuMakanan[1].stock}  
        />
        <h2 className='header-menu-minuman'>Menu Minuman</h2>
        <MenuMinuman 
        namaMenu={this.state.MenuMinuman[0].nama} 
        hargaMenu={this.state.MenuMinuman[0].harga}
        stock={this.state.MenuMinuman[0].stock}
        />
        <MenuMinuman 
        namaMenu={this.state.MenuMinuman[1].nama} 
        hargaMenu={this.state.MenuMinuman[1].harga}
        stock={this.state.MenuMinuman[1].stock}
        />
      </div>
    );
  }
}

export default App;
