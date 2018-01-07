import React    from 'react'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const AffectedSystemEvolution = () => {
  const row1 = [{
    id: 0,
    type: 'textarea'
  }]

  return (
    <div>
      <Fieldset title="Evolución del sistema afectado:">
        <InputRow items={row1} />
      </Fieldset>
    </div>
  )
}

export default AffectedSystemEvolution
