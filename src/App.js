
import Download from "./component/Download/Download";
import Feature from "./component/Feature/Feature";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Pricing from "./component/Pricing/Pricing";


function App() {
  return (
    <div style={{height:"100vh",overflow:"scroll"}} className="container-fluid bg-dark  border border-primary m-0 p-0">
   <Header/>
    <Home/>
    <Feature/>
    <Download/>
    <Pricing/>
    </div>
  );
}

export default App;
