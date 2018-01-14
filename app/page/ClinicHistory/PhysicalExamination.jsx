import React    from 'react'
import uuid     from 'uuid/v4'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const PhysicalExamination = () => {
  const row1 = [{
    label: 'Estado de conciencia:', id: uuid(),
  }]
  const row2 = [{
    label: 'Grado de hidratación:', id: uuid(),
  }, {
    label: 'Febril:', id: uuid(),
  }]
  const row3 = [{
    label: 'Caracteristicas predominantes en el paciente:', id: uuid(),
  }]
  const row4 = [{
    label: 'T. ARTERIAL MMHG:', id: uuid(),
  }, {
    label: 'FC:', id: uuid(),
  }, {
    label: 'FR:', id: uuid(),
  }, {
    label: 'Temperatura:', id: uuid(),
  }]
  const row5 = [{
    label: 'Pulso:', id: uuid(),
  }, {
    label: 'Peso:', id: uuid(),
  }, {
    label: 'Talla:', id: uuid(),
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
