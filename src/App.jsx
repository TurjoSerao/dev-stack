import { Suspense } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Technologies from "./components/technologies/Technologies";

const technologiesData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesData();
  console.log(technologiesPromise);
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
