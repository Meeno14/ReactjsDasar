import React from 'react'
import { Table } from 'react-bootstrap'

function numberWithComma(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}

const Tabel = ({ breads, hapusData, editData }) => {
  return (
    <Table striped bordered hover variant="dark" className="text-center">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Roti</th>
          <th>QTT</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {breads.map((bread, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{bread.nama}</td>
            <td>{bread.jumlah}</td>
            <td>Rp {numberWithComma(bread.harga)}</td>
            <td>
              <button className="btn btn-secondary btn-sm" onClick={() => editData(bread.id)}>Edit</button> |
              | <button className="btn btn-secondary btn-sm" onClick={() => hapusData(bread.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Tabel