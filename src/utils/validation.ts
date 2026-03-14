export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email format." };
  }

  // Basic length check to avoid single letter domains/names easily
  if (email.length < 6) {
      return { isValid: false, error: "Email is suspiciously short." };
  }
  
  const [localPart, domain] = email.split('@');

  if (localPart.length < 2) {
      return { isValid: false, error: "Please use a real email address." };
  }

  // Array of common disposable or fake domains to block
  const blockedDomains = [
    'test.com', 'example.com', 'tempmail.com', 'mailinator.com',
    'guerrillamail.com', '10minutemail.com', 'yopmail.com', 'trashmail.com'
  ];

  if (blockedDomains.includes(domain.toLowerCase())) {
    return { isValid: false, error: "Disposable or test email domains are not allowed." };
  }

  return { isValid: true };
};
