import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages";
import Layout from "./Layout/ui";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <MainPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
