export function ConvertDate(dateString) {
  const givenDate = new Date(dateString);
  const now = new Date();

  // Calculate the difference in milliseconds
  const differenceInMillis = givenDate - now;

  // Convert milliseconds to days and handle past and future dates
  const days = Math.ceil(Math.abs(differenceInMillis) / (1000 * 60 * 60 * 24));

  // Return the result with appropriate wording
  return differenceInMillis > 0 ? `in ${days} days` : `${days} days ago`;
}

 