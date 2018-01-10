import React from 'react'
import Input from 'components/Input'

const CIE10Row = ({ item, handleDelete }) => {
  return (
    <div className="diagnostic-impression-item">
      <div className="diagnostic-impression-item__code">
        <Input label="Código:" defaultValue={item.code} />
      </div>
      <div className="diagnostic-impression-item__name">
        <Input label="Nombre:" defaultValue={item.name} />
      </div>
      <div className="diagnostic-impression-item__close-container">
        <button
          className="diagnostic-impression-item__close"
          onClick={() => handleDelete(item)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default CIE10Row
