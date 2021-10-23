export default function printDate(stringDate: Date) {
  const date = new Date(stringDate);
  const dateToPrint = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return dateToPrint;
}
