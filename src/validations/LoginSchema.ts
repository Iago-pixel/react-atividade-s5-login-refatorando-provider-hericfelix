import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().required("Field required"),
  password: yup.string().required("Field required"),
});
