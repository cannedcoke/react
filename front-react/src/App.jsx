import "./App.css";
import { useState } from "react";
import NavComponent from "./components/NavComponent/NavComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import MainForm from "./components/MainForm/MainForm";
import Details from "./components/DetailsComponent/DetailsComponent";

function App() {
  const [currentView, SetCurrentView] = useState("main");
  const [selectedId, SetSelectedId] = useState(null);

  function handleSelectDetail(id) {
    SetSelectedId(id);
    SetCurrentView("detail");
  }

  if (currentView === "detail") {
    return (
      <>
        <NavComponent />
        <main>
          <Details id={selectedId} onBack={() => SetCurrentView("main")} />
        </main>
        <FooterComponent />
      </>
    );
  }

  return (
    <>
      <NavComponent />
      <main>
        <MainForm onSelectDetail={handleSelectDetail} />
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
