import { Outlet, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { ComponentType, FC, PropsWithChildren, Suspense, lazy } from "react";
import { paths } from "@/constants";
import LoadingComponent from "@/components/LoadingComponent";
import AdminLayout from "@/layout/AdminLayout";
import PostItemPage from "@/pages/PostItemPage";
import Dashboard from "@/pages/DashBoard.tsx";
import HomePage from "@/pages/HomePage.tsx";
import MainLayout from "@/layout/MainLayout";
import ServicePage from "@/pages/ServicePage";
import Login from "@/pages/Login";
import OrderPage from "@/pages/OrderPage";

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  const LazyComponents: FC<P> = (props: PropsWithChildren<P>) => {
    return (
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center">
            <LoadingComponent className="h-10 w-10" />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };

  return LazyComponents;
};

const PostManagementPage = Loadable(
  lazy(() => import("../pages/PostManagementPage"))
);
const NotFoundPage = Loadable(lazy(() => import("../pages/NotFoundPage")));

const lazyRoutes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "admin",
        children: [
          {
            path: "",
            element: (
              <AdminLayout>
                <Outlet />
              </AdminLayout>
            ),
            children: [
              {
                path: paths.dashboard,
                element: <Dashboard />,
              },
              {
                path: paths.ordersManagement,
                element: (
                  <>
                    <PostManagementPage />
                    <Outlet />
                  </>
                ),
                children: [
                  {
                    path: ":id",
                    element: <PostItemPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "",
        children: [
          {
            path: "",
            element: (
              <MainLayout>
                <Outlet />
              </MainLayout>
            ),
            children: [
              {
                path: "",
                element: <HomePage />,
              },
              {
                path: "service",
                element: <ServicePage />,
              },
              {
                path: "login",
                element: <Login />,
              },
              {
                path: "order",
                element: <OrderPage />,
              },
            ],
          },
        ],
      },
      {
        element: <NotFoundPage />,
        path: "*",
      },
    ],
  },
];

const Router = () => {
  const contents = useRoutes(lazyRoutes);
  return <>{contents}</>;
};

export default Router;
