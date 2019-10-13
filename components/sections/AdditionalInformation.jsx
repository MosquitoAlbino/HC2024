import React from 'react'
import Fieldset from '../Fieldset'
import Row from '../Row'
import Input from '../Input'

const AffectedSystemEvolution = () => {
  const getRowStyles = () => ({
    display: 'flex',
    justifyContent: 'space-between',
  })

  const getInputStyle = length => ({
    width: `${100 / length - 1}%`,
  })

  return (
    <Fieldset title="Información adicional:">
      <Row style={getRowStyles()}>
        <Input label="Nombre del medico:" style={getInputStyle(2)} />
        <Input
          label="Registro:"
          style={getInputStyle(2)}
          type="number"
        />
      </Row>
      <Row>
        <Input label="Firma de sello:" type="file" />
      </Row>
    </Fieldset>
  )
}

export default AffectedSystemEvolution
