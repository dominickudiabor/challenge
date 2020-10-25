export type RegisterValues = {
  timeLine: string;
  timeStamp: string;
  fileReadings: FileReading;
};

export type FileReading = {
  reading?: string;
  variableName?: string;
  unit?: string;
  register?: number;
}[];

export type Column = {
  id: 'register' | 'value' | 'variable' | 'unit';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
};
