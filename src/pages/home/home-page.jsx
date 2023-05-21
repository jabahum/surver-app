import { useRouteError } from "react-router-dom";

export default function HomePage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="home-page">
      <h1>Home!</h1>
    </div>
  );
}