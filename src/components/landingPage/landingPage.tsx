import { Button, TextField } from "@mui/material";
import './landingPage.css';

export default function LandingPage() {
  return (
    <main>
      <div className="container">
        <h1>Welcome to the world of interconnected communities!</h1>
        <div className="inputs">
          <TextField
            id="username-input"
            className="username-input"
            label="Username"
            variant="standard"
          />
          <TextField
            id="password-input"
            label="Password"
            variant="standard"
            type="password"
          />
        </div>
        <div className="button">
          <Button
            variant="outlined"
            color="success"
            size="medium"
          >
            Enter
          </Button>
        </div>
      </div>
    </main>
  );
}