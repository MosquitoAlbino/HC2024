import React    from 'react'
import Fieldset from 'components/Fieldset'
import CIE10    from 'components/CIE10'

const DiagnosticImpression = () => {
  return (
    <Fieldset title="Impresión diagnóstica:">
      <CIE10 />
    </Fieldset>
  )
}

export default DiagnosticImpression
