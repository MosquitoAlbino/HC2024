import React    from 'react'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const Record = () => {
  const row1 = [{
    label: 'G:', id: 0,
  }, {
    label: 'P:', id: 1,
  }, {
    label: 'A:', id: 2,
  }, {
    label: 'C:', id: 3,
  }, {
    label: 'V:', id: 4,
  }]
  const row2 = [{
    label: 'MENARQUIA:', id: 0,
  }, {
    label: 'FUM:', id: 1,
  }, {
    label: 'VM:', id: 2,
  }, {
    label: 'VS:', id: 3,
  }]
  const row3 = [{
    label: 'MÉDICOS:', id: 0,
  }]
  const row4 = [{
    label: 'QX:', id: 0,
  }]
  const row5 = [{
    label: 'ALÉRGICOS:', id: 0
  }]
  const row6 = [{
    label: 'TRAUMÁTICOS:', id: 1,
  }]
  const row7 = [{
    label: 'FAMILIARES:', id: 1,
  }]
  const row8 = [{
    label: 'OTROS:', id: 1,
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
