import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Videos from "./Components/Videos";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full h-[10%] fixed top-0 z-50">
        <Header />
      </div>

      <div className="w-full flex flex-row mt-[4rem] ">
        <Sidebar />
        <Videos />
      </div>
    </>
  );
}

export default App;
