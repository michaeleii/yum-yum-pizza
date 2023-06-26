import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{isRouteErrorResponse(error) ? error.data : error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
