import { lazy, Suspense } from "react";

import { createBrowserRouter } from "react-router";

import LoadingScreen from "@/components/LoadingScreen";

import { ROUTE_PATHS } from "@/constants";

const Container = lazy(() =>
  import("@/components/Container").then((comp) => ({
    default: comp.default,
  }))
);

const InstrunctionPage = lazy(() =>
  import("@/pages/instrunctions").then((comp) => ({
    default: comp.default,
  }))
);

const RegisterComplaintPage = lazy(() =>
  import("@/pages/register-complaint").then((comp) => ({
    default: comp.default,
  }))
);

const routes = createBrowserRouter([
  {
    path: ROUTE_PATHS.INTRUNCTIONS_PAGE,
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Container>
          <InstrunctionPage />
        </Container>
      </Suspense>
    ),
  },
  {
    path: ROUTE_PATHS.REGISTER_COMPLAINT,
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Container>
          <RegisterComplaintPage />
        </Container>
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: <p>Page Not Found</p>,
  },
]);

export default routes;
