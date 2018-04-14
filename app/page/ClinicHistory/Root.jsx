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
import AdditionalInformation   from './AdditionalInformation'

export default class Root extends Component {
  state = {
    patientID: '',
  }
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

  onChangePatientID = (event) => {
    this.setState({ patientID: event.target.value })
  }

  render() {
    return (
      <div className="clinic-history">
        <h1 className="clinic-history__title">
          IMIR ALEPH IPS
        </h1>
        <div className="clinic-history__fieldset">
          <ClinicHistory
            patientID={this.state.patientID}
            onChangePatientID={this.onChangePatientID}
          />
        </div>
        <div className="clinic-history__fieldset">
          <IdentificationData
            patientID={this.state.patientID}
            onChangePatientID={this.onChangePatientID}
          />
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
          <AdditionalInformation />
        </div>
      </div>
    )
  }
}
