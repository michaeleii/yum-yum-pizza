import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{isRouteErrorResponse(error) ? error.data : error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
