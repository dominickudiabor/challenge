import { Column } from './types';

export const columns: Column[] = [
  { id: 'register', label: 'Register', minWidth: 100, align: 'center' },
  { id: 'value', label: 'Value', minWidth: 100, align: 'center' },
  {
    id: 'variable',
    label: 'Variable Name',
    minWidth: 270,
    align: 'center',
  },
  {
    id: 'unit',
    label: 'Unit',
    minWidth: 100,
    align: 'center',
  },
];
