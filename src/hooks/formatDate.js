const formatDate = (date) => {
  const splitDate = date.split("-");
  const [year, month, day] = splitDate;
  const dateBr = `${day}-${month}-${year}`;
  return dateBr;
};

export { formatDate };
