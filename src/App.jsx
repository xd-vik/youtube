import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Videos from "./Components/Videos";

function App() {
  return (
    <>
      <div className="w-full">
        <Header />

        <Sidebar />

        <Videos />
      </div>
    </>
  );
}

export default App;
