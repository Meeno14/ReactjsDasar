import React from 'react'
import { Table } from 'react-bootstrap'

const breads = [
  {
    nama: 'Crossiant',
    harga: 17000,
    jumlah: 20,

  },
  {
    nama: 'Baguette',
    harga: 10000,
    jumlah: 27,

  },
  {
    nama: 'Bagel',
    harga: 21000,
    jumlah: 33,

  },
  {
    nama: 'Crumpet',
    harga: 12000,
    jumlah: 21,

  },
  {
    nama: 'Naan',
    harga: 9500,
    jumlah: 14,

  },
  {
    nama: 'Roti',
    harga: 10000,
    jumlah: 8,

  },
  {
    nama: 'Pretzel',
    harga: 14000,
    jumlah: 21,

  },
  {
    nama: 'Focaccia',
    harga: 24000,
    jumlah: 8,

  },
  {
    nama: 'Brioche',
    harga: 18000,
    jumlah: 12,
  },
  {
    nama: 'Sourdough Boule',
    harga: 18000,
    jumlah: 25,
  }
]

const NavbarComponent = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th><center>No</center></th>
          <th><center>Nama Roti</center></th>
          <th><center>Harga</center></th>
          <th><center>Jumlah Roti</center></th>
          <th><center>Aksi</center></th>
        </tr>
      </thead>
      <tbody>
        {breads.map((bread, index) => (
          <tr>
            <td><center>{index + 1}</center></td>
            <td><center>{bread.nama}</center></td>
            <td><center>Rp {bread.harga}</center></td>
            <td><center>{bread.jumlah}</center></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default NavbarComponent