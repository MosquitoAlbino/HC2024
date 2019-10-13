import React, { Component } from 'react'
import Layout from '../components/MyLayout'
import ClinicHistory from '../components/sections/ClinicHistory'
import IdentificationData from '../components/sections/IdentificationData'
import Record from '../components/sections/Record'
import PhysicalExamination from '../components/sections/PhysicalExamination'
import AffectedSystemEvolution from '../components/sections/AffectedSystemEvolution'
import DiagnosticImpression from '../components/sections/DiagnosticImpression'
import TherapeuticPlan from '../components/sections/TherapeuticPlan'
import AdditionalInformation from '../components/sections/AdditionalInformation'

export default class Root extends Component {
  state = {
    patientID: '',
  }

  onChangePatientID = event => {
    this.setState({ patientID: event.target.value })
  }

  render() {
    return (
      <Layout>
        <div className="clinic-history">
          <h1 className="clinic-history__title">
            Atención Local de Emergencias Pre-Hospitalarias ALEPH
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

          <style jsx>{`
            .clinic-history {
              padding: 2rem 1rem;
            }

            .clinic-history__title {
              color: #333;
              text-align: center;
              font-size: 1.5rem;
            }

            .clinic-history__fieldset {
              margin-bottom: 1rem;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}
