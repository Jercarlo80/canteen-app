import React, {Component} from 'react';
import MenuMakanan from '../Components/Menu/MenuMakanan/menuMakanan';
import MenuMinuman from '../Components/Menu/MenuMinuman/menuMinuman';
import '../App/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaKantin: "Canteen SE",
      namaPembeli: '',
      keterangan: '',
      jenisPembayaran: '',
      MenuMakanan: [
        {id: 1, nama: 'Ayam bakar', harga: 25000, stock: 10},
        {id: 2, nama: 'Bebek goreng', harga: 30000, stock: 12},
        {id: 3, nama: 'Nasi goreng', harga: 12000, stock: 11},
        {id: 4, nama: 'Kwetiaw goreng', harga: 12000, stock: 5},
        {id: 5, nama: 'Ayam geprek', harga: 10000, stock: 7},
        {id: 6, nama: 'Mie rebus', harga: 8000, stock: 6}
      ],
      MenuMinuman: [
        {id: 1, nama: 'Es teh manis', harga: 5000, stock: 5},
        {id: 2, nama: 'Es teh tarik', harga: 5500, stock: 3},
        {id: 3, nama: 'Es Jeruk', harga: 5000, stock: 5},
        {id: 4, nama: 'Juice Mangga', harga: 12000, stock: 4},
        {id: 5, nama: 'Juice Melon', harga: 10000, stock: 5},
        {id: 6, nama: 'Juice Apple', harga: 8000, stock: 6}
      ]
    }
  }
  handleGantiNama = (nama) => {
    this.setState({namaKantin: nama})
  }

  handleGantiNamaPembeli = (event) => {
    this.setState({namaPembeli: event.target.value})
  }

  handleGantiKeterangan = (event) => {
    this.setState({keterangan: event.target.value})
  }
  handLeGantiPembayaran = (event) => {
    this.setState({jenisPembayaran: event.target.value})
  }

  //Menjadikan satu handle ganti nama dsb.
  handleGanti =(event) => {
    var nama = event.target.nama
    var value = event.target.value
    this.setState({[nama]: value})
  }

  render(){
    return(
      <div className='App'> SELAMAT DATANG DI KANTIN FAKULTAS INFORMATIKA
        <h1 className='header-name-canteen-se'>{this.state.namaKantin}</h1>
        <button className='btn btn-primary' onClick={() => this.handleGantiNama("Canteen IF")}>Ganti jurusan kantin</button>
        <div className='row' style={{marginTop: '10px'}}>
          <div className='col-md offset-md-4'>
            <form>
              <div className='form-group'>
                <label>
                  Nama Pembeli:
                </label>
                <input 
                  className='form-control' 
                  name='namaPembeli' 
                  onChange={this.handleGantiNamaPembeli}
                  value={this.state.namaPembeli}
                />
                <small>
                  Pemesan: {this.state.namaPembeli}
                </small>
              </div>
              <div className='form-group'>
                <label>Keterangan: </label>
                <textarea
                  className='form-control'
                  name='keterangan'
                  onChange={this.handleGantiKeterangan}
                  value={this.state.keterangan}
                ></textarea>
                <small>
                  Keterangan pemesanan: {this.state.keterangan}
                </small>
              </div>              
              <div className='form-group'> 
                <label>
                  Jenis pembayaran
                </label>
                <select
                  className='form-control'
                  name='jenisPembayaran'
                  value={this.state.value}
                  onChange={this.handeGantiPembayaran}
                >
                  <option value='cash'> Cash</option>
                  <option value='debitCard'>Debit Card</option>
                  <option value='e-wallet'>E-Wallet</option>
                  <option value='voucher'>Voucher</option>
                </select>
                <small>
                  Jenis Pembayaran: {this.state.jenisPembayaran}
                </small>
              </div>
            </form>
          </div>
        </div>

        <h2 className='header-menu-makanan'>Menu Makanan</h2>
        { this.state.MenuMakanan.map((menu)=>
        <MenuMakanan key={menu.id} namaMenu={menu.nama} hargaMenu={menu.harga} stock={menu.stock}/>
        )}
        <h2 className='header-menu-minuman'>Menu Minuman</h2>
        { this.state.MenuMinuman.map((menu)=>
        <MenuMinuman key={menu.id} namaMenu={menu.nama} hargaMenu={menu.harga} stock={menu.stock}/>
        )}
      </div>
    );
  }
}

export default App;
