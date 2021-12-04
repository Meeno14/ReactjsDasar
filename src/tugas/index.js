import React from 'react'
import Tabel from './table'
import NavbarComponent from './navbarComponent'
import Form from './formulir'
import Footer from './footer'
import { Container, Row, Col } from 'react-bootstrap'

export default class Crud extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      breads: [
        {
          nama: 'Crossiant',
          harga: 17000,
          jumlah: 20,
          id: 1
        },
        {
          nama: 'Baguette',
          harga: 10000,
          jumlah: 27,
          id: 2
        },
        {
          nama: 'Bagel',
          harga: 21000,
          jumlah: 33,
          id: 3
        },
        {
          nama: 'Crumpet',
          harga: 12000,
          jumlah: 21,
          id: 4
        },
        {
          nama: 'Naan',
          harga: 9500,
          jumlah: 14,
          id: 5
        },
        {
          nama: 'Roti',
          harga: 10000,
          jumlah: 8,
          id: 6
        },
        {
          nama: 'Pretzel',
          harga: 14000,
          jumlah: 21,
          id: 7
        },
        {
          nama: 'Focaccia',
          harga: 24000,
          jumlah: 8,
          id: 8
        },
        {
          nama: 'Brioche',
          harga: 18000,
          jumlah: 12,
          id: 9
        },
        {
          nama: 'Boule',
          harga: 13000,
          jumlah: 25,
          id: 10
        }
      ],
      nama: "",
      jumlah: "",
      harga: "",
      id: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      this.setState({
        breads: [
          ...this.state.breads,
          {
            nama: this.state.nama,
            jumlah: this.state.jumlah,
            harga: this.state.harga,
            id: this.state.breads.length + 1
          }
        ]
      })
    } else {
      const tidakDipilih = this.state.breads
        .filter((bread) => bread.id !== this.state.id)
        .map((filterbread) => {
          return filterbread
        });

      this.setState({
        breads: [
          ...tidakDipilih,
          {
            nama: this.state.nama,
            jumlah: this.state.jumlah,
            harga: this.state.harga,
            id: this.state.breads.length + 1
          }
        ]
      })
    }
    this.setState({
      nama: "",
      jumlah: "",
      harga: ""
    })
  }

  editData = (id) => {
    const pilihan = this.state.breads.filter((bread) => bread.id === id)
      .map((filterbread) => {
        return filterbread
      })
    this.setState({
      nama: pilihan[0].nama,
      jumlah: pilihan[0].jumlah,
      harga: pilihan[0].harga,
      id: pilihan[0].id
    })
  }

  hapusData = (id) => {
    const breadBaru = this.state.breads.filter((bread) => bread.id !== id)
      .map((filterbread) => {
        return filterbread
      })
    this.setState({
      breads: breadBaru
    })
  }

  render() {
    console.log(this.state.breads);
    return (
      <div>
        <NavbarComponent />
        <Container className="mt-4">
          <Row>
            <Col>
              <h2>Roti Yang Kami Jual</h2>
              <Tabel breads={this.state.breads} editData={this.editData} hapusData={this.hapusData} />
            </Col>
            <Col><Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /></Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}