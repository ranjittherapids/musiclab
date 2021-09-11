
import Download from "./component/Download/Download";
import Feature from "./component/Feature/Feature";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Pricing from "./component/Pricing/Pricing";


function App() {
  return (
    <div style={{height:"100vh",overflow:"scroll"}} className="container-fluid bg-dark m-0 p-0">
   <Header/>
    <Home/>
    <Feature/>
    <Download/>
    <Pricing/>
    <small style={{color:"gray" ,paddingLeft:"20px"}}>copyright @ 2021 ranjit </small>
    </div>
  );
}

export default App;
