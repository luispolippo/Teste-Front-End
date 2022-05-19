import Properties from '../interfaces/Properties';

const propertiesSelectMock: Properties[] = [
  {
    id: 12345,
    property: 'Agrotis 1',
    cnpj: '04.909.987/0001-89',
  },
  {
    id: 12346,
    property: 'Agrotis 2',
    cnpj: '04.909.987/0001-88',
  },
  {
    id: 12347,
    property: 'Agrotis 3',
    cnpj: '04.909.987/0001-87',
  },
  {
    id: 12348,
    property: 'Agrotis 4',
    cnpj: '04.909.987/0001-86',
  },
  {
    id: 12349,
    property: 'Agrotis 5',
    cnpj: '04.909.987/0001-85',
  },
];

const laboratoriesSelectMock = [
  {
    id: 1234,
    laboratory: 'Agro Skynet',
  },
  {
    id: 1235,
    laboratory: 'Umbrella Agro',
  },
  {
    id: 1236,
    laboratory: 'Osbourn Agro',
  },
  {
    id: 1237,
    laboratory: 'Skyrim Agro',
  },
  {
    id: 1238,
    laboratory: 'Agro Brasil',
  },
];

export {
  propertiesSelectMock,
  laboratoriesSelectMock,
};
