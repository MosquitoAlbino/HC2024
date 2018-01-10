import React    from 'react'
import uuid     from 'uuid/v4'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const IdentificationData = () => {
  const row1 = [{
    label: 'NOMBRES:', id: uuid(),
  }, {
    label: 'APELLIDOS:', id: uuid(),
  }]
  const row2 = [{
    label: 'EDAD:', id: uuid(),
  }, {
    label: 'SEXO:', id: uuid(),
  }]
  const row3 = [{
    label: 'MOTIVO DE CONSULTA:', id: uuid(),
  }]
  const row4 = [{
    label: 'ENFERMEDAD ACTUAL:', id: uuid(),
    type: 'textarea',
  }]

  return (
    <div>
      <Fieldset title="Datos de identificación">
        <InputRow items={row1} />
        <InputRow items={row2} />
        <InputRow items={row3} />
        <InputRow items={row4} />
      </Fieldset>
    </div>
  )
}

export default IdentificationData
