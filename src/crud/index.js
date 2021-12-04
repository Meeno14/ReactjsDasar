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
      bukus: [
        {
          nama: "Harry Potter",
          deskripsi: "Harry pembuat pot",
          harga: 200000,
          id: 1
        }
      ],
      nama: "",
      deskripsi: "",
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
        bukus: [
          ...this.state.bukus,
          {
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
            id: this.state.bukus.length + 1
          }
        ]
      })
    } else {
      const tidakDipilih = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterBuku) => {
          return filterBuku
        });

      this.setState({
        bukus: [
          ...tidakDipilih,
          {
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
            id: this.state.bukus.length + 1
          }
        ]
      })
    }
    this.setState({
      nama: "",
      deskripsi: "",
      harga: ""
    })
  }

  editData = (id) => {
    const pilihan = this.state.bukus.filter((buku) => buku.id === id)
      .map((filterBuku) => {
        return filterBuku
      })
    this.setState({
      nama: pilihan[0].nama,
      deskripsi: pilihan[0].deskripsi,
      harga: pilihan[0].harga,
      id: pilihan[0].id
    })
  }

  hapusData = (id) => {
    const bukuBaru = this.state.bukus.filter((buku) => buku.id !== id)
      .map((filterBuku) => {
        return filterBuku
      })
    this.setState({
      bukus: bukuBaru
    })
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <Container className="mt-4">
          <Row>
            <Col><Tabel bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} /></Col>
            <Col><Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /></Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}