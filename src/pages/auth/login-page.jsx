import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <h1>Login </h1>

          <div>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              onChange={this.setEmail}
              value={this.state.email}
            />
          </div>
          <br />
          <div>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              onChange={this.setPassword}
              value={this.state.password}
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
