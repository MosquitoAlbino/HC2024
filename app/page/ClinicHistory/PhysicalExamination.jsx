import React    from 'react'
import uuid     from 'uuid/v4'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const PhysicalExamination = () => {
  const row1 = [{
    label: 'ESTADO DE CONCIENCIA:', id: uuid(),
  }]
  const row2 = [{
    label: 'GRADO DE HIDRATACIÓN:', id: uuid(),
  }, {
    label: 'FEBRIL:', id: uuid(),
  }]
  const row3 = [{
    label: 'CARACTERISTICAS PREDOMINANTES EN EL PACIENTE:', id: uuid(),
  }]
  const row4 = [{
    label: 'T. ARTERIAL MMHG:', id: uuid(),
  }, {
    label: 'FC:', id: uuid(),
  }, {
    label: 'FR:', id: uuid(),
  }, {
    label: 'TEMPERATURA:', id: uuid(),
  }]
  const row5 = [{
    label: 'PULSO:', id: uuid(),
  }, {
    label: 'PESO:', id: uuid(),
  }, {
    label: 'TALLA:', id: uuid(),
  }]

  return (
    <div>
      <Fieldset title="Examen físico">
        <InputRow items={row1} />
        <InputRow items={row2} />
        <InputRow items={row3} />
        <InputRow items={row4} />
        <InputRow items={row5} />
      </Fieldset>
    </div>
  )
}

export default PhysicalExamination
