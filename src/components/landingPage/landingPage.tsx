import { Button, TextField } from "@mui/material";
import { handleLogin, verifyLogin } from "../../controllers/loginController";
import './landingPage.css';
import Cookies from 'js-cookie';
async function makeNetworkCallForLogin(username: string, password: string): Promise<string> {
  // make network call to login
  // if success, then redirect to home page
  // if failure, then show error message
  return (await handleLogin(username, password)).token
}

function addTokenToCookie(token: string) {
  Cookies.set('token', token)
}

function getTokenFromCookie(): string {
  return Cookies.get('token')
}

async function redirectOnCookieValidation() {
  const cookieValidationResponse = await verifyLogin(getTokenFromCookie())
  if (cookieValidationResponse) {
    // redirect to home page
  } else {
    // ask user to log in again
  }
}

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