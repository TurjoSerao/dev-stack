import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Technologies from "./components/technologies/Technologies";

import "react-toastify/dist/ReactToastify.css";

const technologiesData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesData();

  return (
    <>
      <Header />
      <Banner />

      <Suspense fallback={<h2>Loading....</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>

      <Footer />

      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App;
