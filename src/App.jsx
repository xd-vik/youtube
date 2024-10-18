import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Videos from "./Components/Videos";
import "./App.css";
import ChipBar from "./Components/Chipbar";

function App() {
  return (
    <>
      <div className="w-full h-[10%] fixed top-0 z-50">
        <Header />
      </div>

      <div className="w-full flex flex-row mt-[4rem] ">
        <Sidebar />
        <div>
          <ChipBar />
          <Videos />
        </div>
      </div>
    </>
  );
}

export default App;
