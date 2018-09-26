function convertDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const d = new Date(date);
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  const day = d.getDate();
  return `${month} ${day}, ${year}`;
}

export { convertDate };
