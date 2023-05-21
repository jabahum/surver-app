import { useRouteError } from "react-router-dom";
export default function LoginPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="login-page">
        <h1>Login!</h1>
    
      </div>
    );
  }