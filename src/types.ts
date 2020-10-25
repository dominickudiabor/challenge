export type RegisterValues = {
  timeLine: string;
  timeStamp: string;
  fileReadings: {
    reading: string;
    variableName: string;
    unit: string;
  }[];
};

export type FileReading = {
  reading?: string;
  variableName?: string;
  unit?: string;
}[];

export type Column = {
  id: 'register' | 'value' | 'variable' | 'unit';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
};
