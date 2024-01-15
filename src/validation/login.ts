import * as yup from "yup";

const loginValidation = yup.object().shape({
  email: yup.string().email("Invalid E-mail").required("E-Mail is required!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(6, "The password must be at least 6 characters long."),
});

export default loginValidation;
