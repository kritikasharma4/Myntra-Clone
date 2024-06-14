import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fetchitems from "../components/Fetchitems";
function App() {
  

  return (
    <>
      <Header/>
      <Fetchitems/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
