import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import AppLayout from "./Component/Layout/AppLayout.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Login from "./Pages/Login.jsx";
import Services from "./Pages/Services.jsx";
import SignupForm from "./Pages/SignupForm.jsx";
import { PatientSignUpProvider } from "./Context/PatientSignUpContext.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PatientSignUpProvider>
          <AppLayout />
        </PatientSignUpProvider>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Login",
          element: <Login />,
          // children: [
          //   {
          //     path: "SignupForm",
          //     element: <SignupForm />,
          //   },
          // ],
        },
        { path: "/Services", element: <Services /> },
        {
          path: "/SignupForm",
          element: <SignupForm />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
