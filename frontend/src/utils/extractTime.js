export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  if (hours > 12) {
    return `${hours - 12}:${minutes}`;
  }
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
