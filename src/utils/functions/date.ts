function getCurrentDate() {
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are 0-based in JavaScript
  const year = date.getUTCFullYear();

  // Format components with correct padding
  const formattedDay = String(day).padStart(2, "0");
  const formattedMonth = String(month).padStart(2, "0");

  // Return ISO 8601 format (YYYY-MM-DD)
  return `${year}-${formattedMonth}-${formattedDay}`;
}

export { getCurrentDate };
