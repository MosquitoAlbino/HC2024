import React                   from 'react'
import ClinicHistory           from './ClinicHistory'
import IdentificationData      from './IdentificationData'
import Record                  from './Record'
import PhysicalExamination     from './PhysicalExamination'
import AffectedSystemEvolution from './AffectedSystemEvolution'
import DiagnosticImpression    from './DiagnosticImpression'
import TherapeuticPlan         from './TherapeuticPlan'
import DiagnosticAidOrdered    from './DiagnosticAidOrdered'

const Root = () => {
  return (
    <div className="clinic-history">
      <h1 className="clinic-history__title">
        Historia clinica
      </h1>
      <div className="clinic-history__fieldset">
        <ClinicHistory />
      </div>
      <div className="clinic-history__fieldset">
        <IdentificationData />
      </div>
      <div className="clinic-history__fieldset">
        <Record />
      </div>
      <div className="clinic-history__fieldset">
        <PhysicalExamination />
      </div>
      <div className="clinic-history__fieldset">
        <AffectedSystemEvolution />
      </div>
      <div className="clinic-history__fieldset">
        <DiagnosticImpression />
      </div>
      <div className="clinic-history__fieldset">
        <TherapeuticPlan />
      </div>
      <div className="clinic-history__fieldset">
        <DiagnosticAidOrdered />
      </div>
    </div>
  )
}

export default Root
