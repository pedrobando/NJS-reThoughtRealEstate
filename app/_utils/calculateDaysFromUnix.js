const calculateDaysFromUnix = (unixTimestamp) => {
  const listingDate = new Date(unixTimestamp * 1000);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - listingDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays;
};

const calculateDaysFromDate = (isoDateString) => {
  const listingDate = new Date(isoDateString);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - listingDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays;
};

const calculateMonthsAgoFromDate = (isoDateString) => {
  const listingDate = new Date(isoDateString);
  const currentDate = new Date();

  const monthsDifference =
    (currentDate.getFullYear() - listingDate.getFullYear()) * 12 +
    (currentDate.getMonth() - listingDate.getMonth());

  const monthsAgo = Math.round(monthsDifference);

  if (monthsAgo < 1) {
    const differenceInTime = currentDate.getTime() - listingDate.getTime();
    const daysAgo = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return `${daysAgo} days ago`;
  }

  return `${monthsAgo} months ago`;
};

export {
  calculateDaysFromUnix,
  calculateDaysFromDate,
  calculateMonthsAgoFromDate,
};
