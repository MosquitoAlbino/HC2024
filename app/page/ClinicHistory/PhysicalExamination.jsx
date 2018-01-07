import React    from 'react'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const PhysicalExamination = () => {
  const row1 = [{
    label: 'ESTADO DE CONCIENCIA:', id: 0
  }]
  const row2 = [{
    label: 'GRADO DE HIDRATACIÓN:', id: 0,
  }, {
    label: 'FEBRIL:', id: 1,
  }]
  const row3 = [{
    label: 'CARACTERISTICAS PREDOMINANTES EN EL PACIENTE:', id: 0,
  }]
  const row4 = [{
    label: 'T. ARTERIAL MMHG:', id: 0,
  }, {
    label: 'FC:', id: 1,
  }, {
    label: 'FR:', id: 2,
  }, {
    label: 'TEMPERATURA:', id: 3,
  }]
  const row5 = [{
    label: 'PULSO:', id: 0,
  }, {
    label: 'PESO:', id: 1,
  }, {
    label: 'TALLA:', id: 2,
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
