import { z } from 'zod';

// Define the schema for the password
const passwordSchema = z.string().regex(
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
  {
    message: 'Password must contain at least one uppercase letter, one number, one special character, and be at least 12 characters long.'
  }
);

// Function to generate a password
export function generatePassword(): string {
  let password = '';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '@$!%*?&';
  const allChars = uppercase + numbers + specialChars + 'abcdefghijklmnopqrstuvwxyz';

  // Ensure the password has at least one uppercase letter, one number, and one special character
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  // Fill the rest of the password length with random characters
  while (password.length < 12) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle the password to ensure randomness
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  // Validate the generated password
  const validationResult = passwordSchema.safeParse(password);
  if (!validationResult.success) {
    throw new Error(validationResult.error.message);
  }

  return password;
}