import React from 'react'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap'

const Formulir = ({ nama, jumlah, harga, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nama">
        <Form.Label>Nama Roti</Form.Label>
        <Form.Control name="nama" value={nama} onChange={(event) => handleChange(event)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="jumlah">
        <Form.Label>Jumlah</Form.Label>
        <Form.Control name="jumlah" value={jumlah} onChange={(event) => handleChange(event)} type="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="harga">
        <Form.Label>Harga</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
          <FormControl name="harga" value={harga} onChange={(event) => handleChange(event)} type="number" />
        </InputGroup>
      </Form.Group>
      <Button variant="dark" type="submit">Submit</Button>
    </Form>
  )
}

export default Formulir