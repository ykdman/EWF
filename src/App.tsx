import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages";
import { Layout } from "./shared/ui";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Main /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
