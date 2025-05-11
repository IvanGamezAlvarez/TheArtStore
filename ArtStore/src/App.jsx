import { useState } from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  const [OffertMessage, SetOffertMessage] = useState(
    "2X1 en la Primera compra"
  );

  return (
    <>
      <NavBar />
      <ItemListContainer OffertMessage={OffertMessage} />
    </>
  );
}

export default App;
