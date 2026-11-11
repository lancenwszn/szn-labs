/** Contact form rules, shared by the browser form and the /api/contact route. */

export const contactFields = ["name", "email", "subject", "message"] as const;
export type ContactField = (typeof contactFields)[number];
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

const limits: Record<ContactField, number> = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(input: unknown): {
  values: ContactValues;
  errors: ContactErrors;
} {
  const raw = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const read = (key: ContactField) =>
    typeof raw[key] === "string" ? (raw[key] as string).trim() : "";

  const values: ContactValues = {
    name: read("name").replace(/\s+/g, " "),
    email: read("email"),
    subject: read("subject").replace(/\s+/g, " "),
    message: read("message"),
  };
  const errors: ContactErrors = {};

  if (!values.name) errors.name = "Please enter your name.";
  if (!values.email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (!values.subject) errors.subject = "Please add a subject.";
  if (!values.message) errors.message = "Please write a message.";
  else if (values.message.length < 10)
    errors.message = "Please write at least 10 characters.";

  for (const key of contactFields) {
    if (!errors[key] && values[key].length > limits[key])
      errors[key] = `Please keep this under ${limits[key]} characters.`;
  }

  return { values, errors };
}
