import React from 'react'

const Kategori = () => {
  return (
    <>
    <select className="select select-md w-[550px] bg-green-50  shadow-md max-w-sm">
              <option disabled selected>
                Kategori
              </option>
              <option>Pakaian Dewasa</option>
              <option>Pakaian Anak-anak</option>
              <option>Pakaian Remaja</option>
            </select>
    </>
  )
}

export default Kategori