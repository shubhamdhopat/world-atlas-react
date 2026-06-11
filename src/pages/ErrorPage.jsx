import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && error.data}</i>
      </p>
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </div>
  );
};
