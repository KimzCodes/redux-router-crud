import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from "./App";
import { RouterProvider, createBrowserRouter, useRoutes } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Details from "./pages/Details";
import Index from "./pages/Index";
import ErrorPAge from "./pages/ErrorElement";
import { Provider } from "react-redux";
import store from "./state";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPAge/>,
     children: [
      {index: true,
        element: <Index />
      },
      {
        path: "post/add",
        element: <Add />,
      },
      {
        path: "post",
        element: <Index />,
      },
      {
        path: "post/:id/edit",
        element: <Edit />,
      },
      {
        path: "post/:id",
        element: <Details />,
        loader:({params})=>{
       if(isNaN(params.id)){
        throw new Response("Bad Request", {statusText:'Please enter an integer id', status: 400 });
       }
        }
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
);
