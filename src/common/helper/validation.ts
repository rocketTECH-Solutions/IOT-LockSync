export const fieldValidation = (key: string) => {
  return `${key} is required`;
};

export const validateEmail = (email: string): boolean => {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
