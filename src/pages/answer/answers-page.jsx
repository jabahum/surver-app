import { useRouteError } from "react-router-dom";
export default function AnswersPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="answers-page">
        <h1>Answers!</h1>
    
      </div>
    );
  }