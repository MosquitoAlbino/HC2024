import React    from 'react'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const IdentificationData = () => {
  const row1 = [{
    label: 'NOMBRES:', id: 0
  }, {
    label: 'APELLIDOS:', id: 1
  }]
  const row2 = [{
    label: 'EDAD:', id: 1,
  }, {
    label: 'SEXO:', id: 2,
  }]
  const row3 = [{
    label: 'MOTIVO DE CONSULTA:', id: 1,
  }]
  const row4 = [{
    label: 'ENFERMEDAD ACTUAL:', id: 1,
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
