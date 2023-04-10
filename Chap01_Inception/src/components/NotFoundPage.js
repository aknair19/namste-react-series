import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops! Something went wrong </h1>
      <p>
        {error.status}: {error.statusText}
      </p>
    </div>
  );
};
export default NotFoundPage;
