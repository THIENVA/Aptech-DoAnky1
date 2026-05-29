import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import MainPage from "./components/main/MainPage";
import DashboardLayout from "./Layouts/DashboardLayout";
import DashboardMain from "./components/main/DashboardMain";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardMain />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
