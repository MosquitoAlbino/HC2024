import React from "react";
import Fieldset from "../Fieldset";
import Row from "../Row";
import Input from "../Input";

const DiagnosticImpression = () => {
  return (
    <Fieldset title="Plan terapéutico:">
      <Row>
        <Input label="A. Farmacológico:" type="textarea" />
      </Row>
      <Row>
        <Input label="B. No farmacológico:" type="textarea" rows="5" />
      </Row>
      <Row>
        <Input
          label="Ayudas diagnósticas ordenadas:"
          type="textarea"
          rows="5"
        />
      </Row>
      <Row>
        <Input label="Procedimientos:" type="textarea" rows="5" />
      </Row>
    </Fieldset>
  );
};

export default DiagnosticImpression;