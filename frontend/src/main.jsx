import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//*redux
import { Provider } from "react-redux";
import store from "./store/store.js";

//* pages
import ShopPage from "./pages/Shop/ShopPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import AuthorizationPage from "./pages/Authorization/AuthorizationPage.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";

//* protection
import AdminProtect from "./AdminComponents/AdminProtect/AdminProtect.jsx";

//* router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ShopPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/authorization",
        element: <AuthorizationPage />,
      },
      {
        path: "/dashboard",
        element: (
          <AdminProtect>
            <DashboardPage />
          </AdminProtect>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
