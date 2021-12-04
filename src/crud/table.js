import React from 'react'
import { Table } from 'react-bootstrap'

const Tabel = ({ bukus, editData, hapusData }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Buku</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {bukus.map((buku, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{buku.nama}</td>
            <td>{buku.deskripsi}</td>
            <td>{buku.harga}</td>
            <td>
              <button className="btn btn-dark mr-1 btn-sm" onClick={() => editData(buku.id)}>Edit</button>
              <button className="btn btn-secondary mr-1 btn-sm" onClick={() => hapusData(buku.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Tabel