const makanans = [
  {
    nama: 'Soto',
    harga: 12000
  },
  {
    nama: 'Bakso',
    harga: 10000
  },
  {
    nama: 'Mie Ayam',
    harga: 15000
  },
  {
    nama: 'Soto',
    harga: 15000
  },
]
//Reduce
const total_bayar = makanans.reduce((total_harga, makanan) => total_harga + makanan.harga, 0)

const Map = () => {
  return (
    <div>
      <h2>Mapping</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <span>{index + 1}. {makanan.nama} - Harga: Rp {makanan.harga}<br /></span>
        ))}
      </ul>

      <h2>Harga Lebih dari 11.000</h2>
      {makanans.filter((makanan) => makanan.harga > 11000)
        .map((makanan, index) => (
          <span>{index + 1}. {makanan.nama} - Harga: Rp {makanan.harga}<br /></span>
        ))}

      <h3>Totoal Bayar: Rp {total_bayar}</h3>
    </div>
  )
}

export default Map