import React from 'react'

const CIE10Row = ({ item }) => {
  return (
    <div class="diagnostic-impression-item">
      <div data-field-span="6">
        <label>Código:</label>
        <input type="text" value={item.code} />
      </div>
      <div data-field-span="3">
        <label>Nombre:</label>
        <input type="text" value={item.name} />
      </div>
      <div class="diagnostic-impression-item__close-container">
        <button class="diagnostic-impression-item__close">
          eliminar
        </button>
      </div>
    </div>
  )
}

export default CIE10Row
