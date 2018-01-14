import React     from 'react'
import uuid      from 'uuid/v4'
import InputRows from 'components/InputRow/InputRows'
import Fieldset  from 'components/Fieldset'

const IdentificationData = () => {
  const rows = [
    [
      {
        label: 'Nombres:', id: uuid(),
      }, {
        label: 'Apellidos:', id: uuid(),
      }
    ],
    [
      {
        label: 'Fecha de nacimiento:', id: uuid(),
      }, {
        label: 'Edad:', id: uuid(),
      }, {
        label: 'Sexo:', id: uuid(),
      }
    ],
    [
      {
        label: 'Tipo de identificación:',
        id: uuid(),
      },
      {
        label: 'No.',
        id: uuid(),
      },
      {
        label: 'Estado civil:',
        id: uuid(),
      },
    ],
    [
      {
        label: 'Ocupación:',
        id: uuid(),
      },
      {
        label: 'Dirección:',
        id: uuid(),
      },
    ],
    [
      {
        label: 'Teléfono',
        id: uuid(),
      },
      {
        label: 'Aseguradora:',
        id: uuid(),
      },
    ],
    [
      {
        label: 'Carnet No.',
        id: uuid(),
      },
      {
        label: 'Regimen:',
        id: uuid(),
      },
    ],
    [
      {
        label: 'Nombre del acompañante:',
        id: uuid(),
      },
      {
        label: 'Parentesco:',
        id: uuid(),
      },
    ],
    [
      {
        label: 'Dirección:',
        id: uuid(),
      },
      {
        label: 'Teléfono:',
        id: uuid(),
      },
      {
        label: 'Raza:',
        id: uuid(),
      },
      {
        label: 'Nivel educativo:',
        id: uuid(),
      },
    ],
    [
      {
        label: 'Motivo de consulta:',
        id: uuid(),
        type: 'textarea',
      }
    ],
    [
      {
        label: 'Enfermedad actual:', id: uuid(),
        type: 'textarea',
      }
    ]
  ]

  return (
    <Fieldset title="Datos de identificación">
      <InputRows rows={rows} />
    </Fieldset>
  )
}

export default IdentificationData
