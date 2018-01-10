import React, {
  Component,
}                              from 'react'
import ClinicHistory           from './ClinicHistory'
import IdentificationData      from './IdentificationData'
import Record                  from './Record'
import PhysicalExamination     from './PhysicalExamination'
import AffectedSystemEvolution from './AffectedSystemEvolution'
import DiagnosticImpression    from './DiagnosticImpression'
import TherapeuticPlan         from './TherapeuticPlan'
import DiagnosticAidOrdered    from './DiagnosticAidOrdered'

export default class Root extends Component {
  componentDidMount = () => {
    import('../../data/cie10-array.json')
      .then((cie10DB) => {
        window.cie10DB = cie10DB
        console.log('cie10DB', window.cie10DB)
      })
      .catch((error) => {
        console.error('error', error)
      })
  }

  render() {
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
}
