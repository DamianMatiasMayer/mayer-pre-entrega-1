import NavBar from "./componentes/NavBar/NavBar";
import "./App.css"

const App = () => {
  return (
    <div >
      <NavBar/>
      <ItemListContainer greeting={"se viene el finde"} />
    </div>
  );
};

export default App;
