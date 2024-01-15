import BoxWrap from "../../components/box-wrap";
import CButton from "../../components/button";
import FormTextField from "../../components/form-text-field";
import LoginIcon from "@mui/icons-material/Login";
import loginValidation from "../../validation/login";
import {
  Avatar,
  Box,
  Grid,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import { FunctionComponent } from "react";
import { useLogin } from "../../services/auth.service";
import { LoginUserModel } from "../../models/login-user.model";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const navigate: NavigateFunction = useNavigate();

  const formInitialValues: LoginUserModel = {
    email: "",
    password: "",
  };

  const loginMutation = useLogin();

  const handleFormSubmit = async (
    values: {
      email: string;
      password: string;
    },
    { setSubmitting }: FormikHelpers<LoginUserModel>
  ) => {
    setSubmitting(true);
    await loginMutation.mutate(values);
    navigate("/");
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={formInitialValues}
        validationSchema={loginValidation}
        onSubmit={handleFormSubmit}
        validateOnBlur={false}
      >
        {({ values, resetForm, handleSubmit, setFieldValue, isSubmitting }) => {
          const onHandleChange = (
            e:
              | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              | SelectChangeEvent<any>
          ) => {
            const { name, value } = e.target;
            setFieldValue(name, value);
          };
          return (
            <Box
              sx={{
                m: "auto",
                width: "50%",
                minWidth: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LoginIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log in
              </Typography>
              <form onSubmit={handleSubmit}>
                <BoxWrap padding={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <FormTextField
                        name="email"
                        label="E-mail"
                        value={values.email || ""}
                        required={true}
                        onChange={onHandleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormTextField
                        name="password"
                        label="Password"
                        value={values.password || ""}
                        required={true}
                        onChange={onHandleChange}
                      />
                    </Grid>
                  </Grid>
                  <CButton label="Log in" type="submit" />
                </BoxWrap>
              </form>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginPage;
