import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationOne from "./components/RegistrationOne";
import RegistrationTwo from "./components/RegistrationTwo";
import RegistrationThree from "./components/RegistrationThree";
import RegistrationFour from "./components/RegistrationFour";
import RegistrationPage from "./pages/RegistrationPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />}>
        <Route index element={<RegistrationOne />} />
        <Route path="step-2" element={<RegistrationTwo />} />
        <Route path="step-3" element={<RegistrationThree />} />
        <Route path="step-4" element={<RegistrationFour />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;