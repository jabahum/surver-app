import { useRouteError } from "react-router-dom";
export default function SignUpPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="signup-page">
        <h1>SignUp!</h1>
    
      </div>
    );
  }