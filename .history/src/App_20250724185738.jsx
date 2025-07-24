import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Layout from "./components/LayOut/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";

let boda = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <RouterProvider router={boda}></RouterProvider>
    </>
  );
}

export default App;
