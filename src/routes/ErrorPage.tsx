import { useRouteError } from "react-router-dom";
import { Layout } from "../style/styled-components/error-page";

export default function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string; } | undefined;
  console.error(error);

  return (
    <Layout id="error-page">
      <h1>Sorry</h1>
      <p>An unexpected error has occurred. <i>{error?.statusText || error?.message}</i></p>
    </Layout>
  );
}