import "./App.css";
import Header from "./componants/header";
import MainSection from "./componants/MainSection.jsx";
import SideBar from "./componants/SideBar";
function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="bottomPage">
        <SideBar></SideBar>
        <MainSection></MainSection>
      </div>
    </div>
  );
}

export default App;
