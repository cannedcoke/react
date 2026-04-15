import "./App.css";
import { useState } from "react";
import NavComponent from "./components/NavComponent/NavComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import MainForm from "./components/MainForm/MainForm";
import Details from "./components/DetailsComponent/DetailsComponent";

// uno todos los componentes dentro de app
function App() {
  const [currentView, SetCurrentView] = useState("main");//estado predeterminado
  const [selectedId, SetSelectedId] = useState(null);

  function handleSelectDetail(id) {
    SetSelectedId(id);
    SetCurrentView("detail");
  }
  // ondicional para mostrar vistas difrentes depenediendo de la accion del usuario
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
