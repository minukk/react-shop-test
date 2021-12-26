import React from 'react'

function Products({ name, imagePath }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        alt={`${name} product`}
        style={{ width: '75%' }}
        src={`http://localhost:5000/${imagePath}`}
      />
      <form style={{ margin: '10px' }}>
        <label style={{ textAlign: 'right' }}>{name}</label>
        <input
          style={{ marginLeft: 7 }}
          type='number'
          name='quantity'
          min='0'
          defaultValue={0}
        />
      </form>
    </div>
  )
}

export default Products
