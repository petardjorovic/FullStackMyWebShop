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
import SingleProductPage from "./pages/SingleProduct/SingleProductPage.jsx";
import OrderPage from "./pages/Order/OrderPage.jsx";

//* Admin's components
import StatisticsComponent from "./AdminComponents/Statistics/StatisticsComponent.jsx";
import AddProductComponent from "./AdminComponents/AddProduct/AddProductComponent.jsx";
import UsersComponent from "./AdminComponents/Users/UsersComponent.jsx";
import CommentsComponent from "./AdminComponents/Comments/CommentsComponent.jsx";
import ProductsComponent from "./AdminComponents/Products/ProductsComponent.jsx";

//* protection
import AdminProtect from "./AdminComponents/AdminProtect/AdminProtect.jsx";

//* router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { adminSidebarConfig } from "./config/AdminSidebarConfig.js";

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
        path: "/product/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminProtect>
        <DashboardPage />
      </AdminProtect>
    ),
    children: [
      {
        path: "",
        element: <StatisticsComponent />,
      },
      {
        path: "add-product",
        element: <AddProductComponent />,
      },
      {
        path: "products",
        element: <ProductsComponent />,
      },
      {
        path: "users",
        element: <UsersComponent />,
      },
      {
        path: "comments",
        element: <CommentsComponent />,
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
