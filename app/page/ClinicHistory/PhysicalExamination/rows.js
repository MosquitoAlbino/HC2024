import uuid from 'uuid/v4'

export default function getRows({
  handleWeightChange,
  handleSizeChange,
  imc,
}) {
  return ([
    [{
      label: 'Estado de conciencia:', id: uuid(),
    }],
    [{
      label: 'Grado de hidratación:', id: uuid(),
    }, {
      label: 'Febril:', id: uuid(),
    }],
    [{
      label: 'Caracteristicas predominantes en el paciente:', id: uuid(),
    }],
    [{
      label: 'T. ARTERIAL MMHG:', id: uuid(),
    }, {
      label: 'FC:', id: uuid(),
    }, {
      label: 'FR:', id: uuid(),
    }, {
      label: 'Temperatura:', id: uuid(),
    }],
    [{
      label: 'Pulso:', id: uuid(),
    }, {
      label: 'Peso:',
      id: uuid(),
      onChange: handleWeightChange,
      type: 'number',
    }, {
      label: 'Talla:',
      id: uuid(),
      onChange: handleSizeChange,
      type: 'number',
    }, {
      label: 'IMC:',
      id: uuid(),
      value: imc,
      disabled: true,
    }]
  ])
}
