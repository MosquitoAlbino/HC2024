import React from "react";
import Fieldset from "../Fieldset";
import Row from "../Row";
import Input from "../Input";

const AffectedSystemEvolution = () => {
  return (
    <Fieldset title="Evolución del sistema afectado:">
      <Row>
        <Input type="textarea" />
      </Row>
    </Fieldset>
  );
};

export default AffectedSystemEvolution;
