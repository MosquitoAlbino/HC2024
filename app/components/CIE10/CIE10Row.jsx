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
      <div className="diagnostic-impression-item__type-container">
        <label htmlFor="cie10-type" className="input-text__label">
          Tipo de diagnostico:
        </label>
        <select
          name="cie10-type"
          id="cie10-type"
          className="diagnostic-impression-item__type"
        >
          <option value="impresion-diagnostica">Impresion diagnostica</option>
          <option value="confirmado-nuevo">Confirmado nuevo</option>
          <option value="confirmado-repetido">Confirmado repetido</option>
        </select>
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
