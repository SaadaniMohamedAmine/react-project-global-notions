import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("The email should be a valid email.")
    .required("the email is required."),
  password: yup
    .string("The password should be a string.")
    .min(8, "The minimum character is 5 chars.")
    .max(32, "The maximum characters is 32")
    .required("The password is required."),
});

export default loginSchema;
