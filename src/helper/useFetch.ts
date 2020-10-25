export const formatObject = (file: string) => {
  const fileArray = file.match(/[^\r\n]+/g) as string[];
  const time = fileArray[0];
  const timeline = time.trim().slice(0, time.indexOf(' '));
  const timeStamp = time.slice(time.indexOf(' '));
  const fileReadings = fileArray
    .slice(1)
    .map((a) => {
      return a.split(':').map((b) => b.trim());
    })
    .map((e) => {
      return { [e[0]]: e[1] };
    });
  const formatObject = (index: number, variableName: string, unit: string) => {
    if (index >= 0 && index < 49) {
      for (let i = index; i < index + 2; i++) {
        fileReadings[i] = {
          ...fileReadings[i],
          variableName: variableName,
          unit,
        };
      }
    } else if (index === 52) {
      for (let i = index; i < index + 3; i++) {
        fileReadings[i] = {
          ...fileReadings[i],
          variableName: variableName,
          unit,
        };
      }
    } else if (index >= 76 && index < 89) {
      for (let i = index; i < index + 2; i++) {
        fileReadings[i] = {
          ...fileReadings[i],
          variableName: variableName,
          unit,
        };
      }
    } else if (index === 96 || index === 98) {
      for (let i = index; i < index + 2; i++) {
        fileReadings[i] = {
          ...fileReadings[i],
          variableName: variableName,
          unit,
        };
      }
    } else {
      switch (index) {
        case 50:
        case 55:
        case 58:
        case 59:
        case 60:
        case 61:
        case 71:
        case 91:
        case 92:
        case 93:
        case 95:
          return (fileReadings[index] = {
            ...fileReadings[index],
            variableName: variableName,
            unit,
          });

        case 100:
          return;

        default:
          break;
      }
    }
  };
  formatObject(0, 'Flow Rate', 'm\u00B3/h');
  formatObject(2, 'Energy Flow Rate', 'GJ/h');
  formatObject(4, 'Velocity', 'm/s');
  formatObject(6, 'Fluid sound speed', 'm/s');
  formatObject(8, 'Positive accumulator', '');
  formatObject(10, 'Positive decimal fraction', '');
  formatObject(12, 'Negative accumulator', '');
  formatObject(14, 'Negative decimal fraction', '');
  formatObject(16, 'Positive energy accumulator', '');
  formatObject(18, 'Positive energy decimal fraction', '');
  formatObject(20, 'Negative energy accumulator', '');
  formatObject(22, 'Negative energy decimal fraction', '');
  formatObject(24, 'Net accumulator', '');
  formatObject(26, 'Net decimal fraction', '');
  formatObject(28, 'Net energy accumulator', '');
  formatObject(30, 'Net energy decimal fraction', '');
  formatObject(32, 'Temperature #1/inlet', '°C');
  formatObject(34, 'Temperature #2/inlet', '°C');
  formatObject(36, 'Analog input AI3', '');
  formatObject(38, 'Analog input AI4', '');
  formatObject(40, 'Analog input AI5', '');
  formatObject(42, 'Current input at AI3', 'mA');
  formatObject(44, 'Current input at AI3', 'mA');
  formatObject(46, 'Current input at AI3', 'mA');
  formatObject(48, 'System password', '');
  formatObject(50, 'Password for hardware', '');
  formatObject(55, 'Day+Hour for Auto-Save', '');
  formatObject(58, 'Key to input', '');
  formatObject(59, 'Go to Window #', '');
  formatObject(60, 'LCD Back-lit lights for number of seconds', '');
  formatObject(61, 'Times for the beeper', '');
  formatObject(71, 'Error Code', '');
  formatObject(76, 'PT100 resistance of inlet', 'Ohm');
  formatObject(78, 'PT100 resistance of outlet', 'Ohm');
  formatObject(80, 'Total travel time', 'µs');
  formatObject(82, 'Delta travel time', 'ns');
  formatObject(84, 'Upstream travel time', 'µs');
  formatObject(86, 'Downstream travel time', 'µs');
  formatObject(88, 'Output current', 'mA');
  formatObject(91, 'Working step and Signal Quality', '');
  formatObject(92, 'Upstream strength', '');
  formatObject(93, 'Downstream strength', '');
  formatObject(95, 'Language used in user interface', '');
  formatObject(
    96,
    'The rate of the measured travel time by the calculated travel time.',
    ''
  );
  formatObject(98, 'Reynolds number', '');

  return { timeline, timeStamp, fileReadings };
};
