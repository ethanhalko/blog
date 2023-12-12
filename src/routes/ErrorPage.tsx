import {useRouteError, isRouteErrorResponse} from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (!isRouteErrorResponse(error)) {
    return;
  }

  return (
    <div id="error-page">
      <h1 className={'text-4xl mb-4'}>Something went wrong</h1>
      <p className={'text-xl mb-4'}>An unexpected error has occurred, and the error is:</p>
      <code className={'bg-neutral-100 p-2 rounded-lg'}>
        {error.status} - {error.statusText || error.data}
      </code>
    </div>
  );
}
