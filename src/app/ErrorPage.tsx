import { useRouteError, Link } from "react-router-dom";

interface ErrorPageError extends Error {
  statusText?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorPageError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to="/">Home Page</Link>
    </div>
  );
};

export default ErrorPage;
