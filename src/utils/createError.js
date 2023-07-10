module.exports = (message, statusCode) => {
  const error = new Error(message); // error เป็น คลาส สามารถใช้ new ได้
  error.statusCode = statusCode;
  throw error;
};
