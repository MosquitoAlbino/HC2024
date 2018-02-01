import React    from 'react'
import Fieldset from 'components/Fieldset'
import Row      from 'components/Row'
import Input    from 'components/Input'

const AffectedSystemEvolution = () => {
  return (
    <Fieldset title="Evolución del sistema afectado:">
      <Row>
        <Input type="textarea" />
      </Row>
    </Fieldset>
  )
}

export default AffectedSystemEvolution
