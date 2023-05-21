import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { LoginPayload } from "../../store/type";
import { object, string, TypeOf } from "zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoadingButton as _LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterUserMutation } from "../../redux/auth/auth-api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "../../components/FormInput";

const LoadingButton = styled(_LoadingButton)`
  padding: 0.6rem 0;
  background-color: #f9d13e;
  color: #2363eb;
  font-weight: 500;

  &:hover {
    background-color: #ebc22c;
    transform: translateY(-2px);
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #2363eb;
  &:hover {
    text-decoration: underline;
  }
`;

const registerSchema = object({
  name: string().min(1, "Full name is required").max(100),
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

export type RegisterInput = TypeOf<typeof registerSchema>;

export default function SignUpPage() {
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  // 👇 API Login Mutation
  // 👇 Calling the Register Mutation
  const [registerUser, { isLoading, isSuccess, error, isError }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSuccess) {
      toast.success("User registered successfully");
      navigate("/home");
    }

    if (isError) {
      console.log(error);
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: "top-right",
        });
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    // 👇 Executing the RegisterUser Mutation
    registerUser(values);
  };

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            textAlign="center"
            component="h1"
            sx={{
              color: "#f9d13e",
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
              letterSpacing: 1,
            }}
          >
            Survey App !
          </Typography>

          <Typography component="h2" sx={{ color: "#00000", mb: 2 }}>
            Sign Up!
          </Typography>

          <FormProvider {...methods}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmitHandler)}
              noValidate
              autoComplete="off"
              maxWidth="27rem"
              width="100%"
              sx={{
                backgroundColor: "#e5e7eb",
                p: { xs: "1rem", sm: "2rem" },
                borderRadius: 2,
              }}
            >
              <FormInput name="name" label="Full Name" />
              <FormInput name="email" label="Email Address" type="email" />
              <FormInput name="password" label="Password" type="password" />
              <FormInput
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
              />
              <Typography sx={{ fontSize: "0.9rem", mb: "1rem" }}>
                Already have an account?
                <LinkItem to="/auth/login">Login Here</LinkItem>
              </Typography>

              <LoadingButton
                variant="contained"
                sx={{ mt: 1 }}
                fullWidth
                disableElevation
                type="submit"
                loading={isLoading}
              >
                Sign Up
              </LoadingButton>
            </Box>
          </FormProvider>
        </Box>
      </Container>
    </>
  );
}
