import React    from 'react'
import uuid     from 'uuid/v4'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const Record = () => {
  const row1 = [{
    label: 'G:', id: uuid(),
  }, {
    label: 'P:', id: uuid(),
  }, {
    label: 'A:', id: uuid(),
  }, {
    label: 'C:', id: uuid(),
  }, {
    label: 'V:', id: uuid(),
  }]
  const row2 = [{
    label: 'MENARQUIA:', id: uuid(),
  }, {
    label: 'FUM:', id: uuid(),
  }, {
    label: 'VM:', id: uuid(),
  }, {
    label: 'VS:', id: uuid(),
  }]
  const row3 = [{
    label: 'MÉDICOS:', id: uuid(),
  }]
  const row4 = [{
    label: 'QX:', id: uuid(),
  }]
  const row5 = [{
    label: 'ALÉRGICOS:', id: uuid()
  }]
  const row6 = [{
    label: 'TRAUMÁTICOS:', id: uuid(),
  }]
  const row7 = [{
    label: 'FAMILIARES:', id: uuid(),
  }]
  const row8 = [{
    label: 'OTROS:', id: uuid(),
  }]

  return (
    <div>
      <Fieldset title="Antecedentes:">
        <InputRow items={row1} />
        <InputRow items={row2} />
        <InputRow items={row3} />
        <InputRow items={row4} />
        <InputRow items={row5} />
        <InputRow items={row6} />
        <InputRow items={row7} />
      </Fieldset>
    </div>
  )
}

export default Record
