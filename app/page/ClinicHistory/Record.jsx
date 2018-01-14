import React     from 'react'
import uuid      from 'uuid/v4'
import InputRows from 'components/InputRow/InputRows'
import Fieldset  from 'components/Fieldset'

const Record = () => {
  const rows = [
    [{
      label: 'Gravida:', id: uuid(),
    }, {
      label: 'Parto:', id: uuid(),
    }, {
      label: 'Aborto:', id: uuid(),
    }, {
      label: 'Cesarea:', id: uuid(),
    }, {
      label: 'Hijos vivos:', id: uuid(),
    }],
    [{
      label: 'Menarquia:', id: uuid(),
    }, {
      label: 'FUM:', id: uuid(),
    }, {
      label: 'Vida marital:', id: uuid(),
    }, {
      label: 'Vida sexual:', id: uuid(),
    }, {
      label: 'Vida obstetrica:', id: uuid(),
    }],
    [{
      label: 'Médicos:', id: uuid(),
    }],
    [{
      label: 'Qirurgicos:', id: uuid(),
    }],
    [{
      label: 'Alérgicos:', id: uuid()
    }],
    [{
      label: 'Traumáticos:', id: uuid(),
    }],
    [{
      label: 'Familiares:', id: uuid(),
    }],
    [{
      label: 'Otros:', id: uuid(),
    }],
  ]

  return (
    <div>
      <Fieldset title="Antecedentes personales:">
        <InputRows rows={rows} />
      </Fieldset>
    </div>
  )
}

export default Record
