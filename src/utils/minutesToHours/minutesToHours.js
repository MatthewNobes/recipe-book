export const minutesToHours = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
};
