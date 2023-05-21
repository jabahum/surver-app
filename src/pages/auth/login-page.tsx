import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
export default function LoginPage() {



  return (
    <>
      <Container>
        <form >
          <h1>Login </h1>

          <div>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
            />
          </div>
          <br />
          <div>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
            />
          </div>
          <br />
          <div>
            <Button id="btnLogin" variant="contained">
              Login
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
