import NavBar from "./componentes/NavBar/NavBar";
import "./App.css"
import ItemListContainer from  "./componentes/ItemListContainer/ItemListContainer";


const App = () => {
  return (
    <div >
      <NavBar/>
      <ItemListContainer greeting={"se viene el finde"} />
      
    </div>
  );
};

export default App;