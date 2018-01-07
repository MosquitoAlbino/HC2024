import React    from 'react'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const AffectedSystemEvolution = () => {
  const row1 = [{
    id: 0,
    label: 'AYUDAS DIAGNÓSTICAS ORDENADAS:',
    type: 'textarea'
  }]
  const row2 = [{
    label: 'PROCEDIMIENTOS:',
    type: 'textarea',
    id: 0,
  }]
  const row3 = [{
    label: 'NOMBRE DEL MEDICO:',
    id: 0,
  }, {
    label: 'REGISTRO',
    id: 0,
  }]
  const row4 = [{
    label: 'FIRMA DE SELLO:',
    id: 0,
  }]

  return (
    <div>
      <Fieldset title="Ayudas diagnósticas ordenadas:">
        <InputRow items={row1} />
        <InputRow items={row2} />
        <InputRow items={row3} />
        <InputRow items={row4} />
      </Fieldset>
    </div>
  )
}

export default AffectedSystemEvolution
