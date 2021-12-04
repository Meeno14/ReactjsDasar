import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulir = ({ id, nama, deskripsi, harga, handleChange, handleSubmit }) => {
  return (
    <div>
      <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nama">
          <Form.Label>Nama Buku</Form.Label>
          <Form.Control name="nama" value={nama} onChange={(event) => handleChange(event)} type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="deskripsi">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="harga">
          <Form.Label>Harga</Form.Label>
          <Form.Control name="harga" value={harga} onChange={(event) => handleChange(event)} type="number" />
        </Form.Group>
        <Button variant="dark" type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default Formulir