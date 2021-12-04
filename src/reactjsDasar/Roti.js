const breads = [
  {
    nama: 'Crossiant',
    harga: 15000,
    jumlah: 20,

  },
  {
    nama: 'Baguette',
    harga: 10000,
    jumlah: 27,

  },
  {
    nama: 'Bagel',
    harga: 15000,
    jumlah: 33,

  },
  {
    nama: 'Crumpet',
    harga: 15000,
    jumlah: 21,

  },
  {
    nama: 'Naan',
    harga: 15000,
    jumlah: 14,

  },
  {
    nama: 'Roti',
    harga: 15000,
    jumlah: 8,

  },
  {
    nama: 'Pretzel',
    harga: 15000,
    jumlah: 21,

  },
  {
    nama: 'Focaccia',
    harga: 15000,
    jumlah: 8,

  },
  {
    nama: 'Brioche',
    harga: 15000,
    jumlah: 12,
  },
  {
    nama: 'Sourdough Boule',
    harga: 15000,
    jumlah: 25,
  }
]
//Reduce
const total_roti = breads.reduce((jumlah_roti, bread) => jumlah_roti + bread.jumlah, 0)
const total_harga = breads.reduce((total_harga, bread) => total_harga + bread.harga, 0)

const Map = () => {
  return (
    <div>
      <h2>Daftar Roti</h2>
      <table>
        <tr>
          <th>No</th>
          <th>Nama Roti</th>
          <th>Harga</th>
          <th>Stok Roti</th>
          <th>Total Harga</th>
        </tr>
        {breads.map((bread, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{bread.nama}</td>
            <td>Rp {bread.harga}</td>
            <td>{bread.jumlah}</td>
            <td>{bread.jumlah * bread.harga}</td>
          </tr>
        ))}
      </table>

      <h3>Total Jumlah Roti: {total_roti}</h3>
      <h3>Semua Harga Roti: {total_harga}</h3>
    </div>
  )
}

export default Map