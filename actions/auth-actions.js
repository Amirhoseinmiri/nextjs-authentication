"use server";

export async function signUp(prevFormState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let errors = {};

  if (!email.includes("@")) {
    errors.email = "please enter a valid email address.";
  }
  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 character long";
  }
}
