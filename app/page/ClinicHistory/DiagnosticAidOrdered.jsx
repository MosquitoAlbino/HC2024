import React     from 'react'
import Fieldset  from 'components/Fieldset'
import Row       from 'components/Row'
import Input     from 'components/Input'

const AffectedSystemEvolution = () => {
  const getRowStyles = () => ({
    display: 'flex',
  })

  const getInputStyle = (length) => ({
    width: `${(100 / length) - 1}%`,
  })

  return (
    <Fieldset title="Información adicional:">
      <Row style={getRowStyles()}>
        <Input label="Nombre del medico:" style={getInputStyle(2)} />
        <Input label="Registro:" style={getInputStyle(2)} />
      </Row>
      <Row>
        <Input label="Firma de sello:" />
      </Row>
    </Fieldset>
  )
}

export default AffectedSystemEvolution
