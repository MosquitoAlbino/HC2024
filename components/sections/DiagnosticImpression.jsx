import React from "react";
import Fieldset from "../Fieldset";
import CIE10 from "../CIE10";
import Input from "../Input";

const DiagnosticImpression = () => {
  return (
    <div>
      <Fieldset title="Resultados paraclinicos:">
        <Input type="textarea" rows="3" />
      </Fieldset>
      <Fieldset title="Impresión diagnóstica:">
        <CIE10 />
      </Fieldset>
    </div>
  );
};

export default DiagnosticImpression;
