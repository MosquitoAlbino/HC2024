import React    from 'react'
import InputRow from 'components/InputRow'
import Fieldset from 'components/Fieldset'

const DiagnosticImpression = () => {
  const row1 = [{
    label: 'BUSCAR:', id: 0
  }]

  return (
    <div>
      <Fieldset title="Impresión diagnóstica:">
        <InputRow items={row1} />
      </Fieldset>
    </div>
  )
}

export default DiagnosticImpression
