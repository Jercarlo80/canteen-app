import React, { Component } from "react";

class menuMinuman extends Component {
    render() {
        if(this.props !== 0) {
            return(
                <div style={{border: '1px solid black', width: 300, margin: 'auto'}}>
                    <p>Nama Menu: {this.props.namaMenu}</p>
                    <p>Harga: Rp{this.props.hargaMenu}</p>
                    <p>Stock: {this.props.stock}</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default menuMinuman;