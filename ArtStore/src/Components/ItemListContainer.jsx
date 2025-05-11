import React from "react";

function ItemListContainer({ OffertMessage }) {
  return (
    <>
      <main className=" bg-gray-400  h-96">
        <h2 className=" text-center p-1 bg-white font-bold shadow-md uppercase">
          {OffertMessage}
        </h2>
      </main>
    </>
  );
}

export default ItemListContainer;
