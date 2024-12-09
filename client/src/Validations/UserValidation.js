import * as yup from "yup";
export const userSchemaValidation = yup.object().shape({
    name: yup.string().required("name is reauired"),
    email:yup.string().email("not valid email format")
    .required("email is required"),
    password:yup.string().min(4).max(20).required("password is required"),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null],
    "password don't match").required(),
});
