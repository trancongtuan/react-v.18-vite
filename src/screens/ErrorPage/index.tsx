import { useRouteError } from 'react-router-dom';

// eslint-disable-next-line import/no-unused-modules
export default function ErrorPage() {
  const error = useRouteError();
  const { statusText, message } = error as { statusText: string; message: string };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
}
