import { useRouteError } from "react-router-dom";
export default function QuestionsPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="questions-page">
        <h1>Questions!</h1>
    
      </div>
    );
  }