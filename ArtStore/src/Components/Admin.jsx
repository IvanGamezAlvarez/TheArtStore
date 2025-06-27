// import React from "react";
// import Paints from "./../data/paintsData";
// import artStylesData from "../data/artStylesData";
// import { addDoc, collection, getFirestore } from "firebase/firestore";

// function Admin() {
//   const handleButton = () => {
//     const db = getFirestore();
//     const itemCollection = collection(db, "ArtStyles");

//     artStylesData.forEach((paint) => {
//       const item = {
//         name: paint.name,
//         description: paint.description,
//         id: paint.id,
//         imageUrl: paint.imageUrl,
//       };

//       addDoc(itemCollection, item).then(({ id }) => {
//         console.log(id);
//       });
//     });
//   };

//   return (
//     <>
//       <h1 className=" text-amber-50 font-semibold p-2">agregar datos</h1>
//       <button onClick={handleButton} className="p-2 bg-amber-300 font-bold ">
//         agregar
//       </button>
//     </>
//   );
// }

// export default Admin;
