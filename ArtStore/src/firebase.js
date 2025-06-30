import { collection, getDocs, getFirestore } from "firebase/firestore";

export const getPaintsData = async () => {
  const db = getFirestore();

  const paintsCollection = collection(db, "Paints");
  const querySnapshot = await getDocs(paintsCollection);
  const paintList = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return paintList;
};

export const getArtSylesData = async () => {
  const db = getFirestore();

  const StylesCollection = collection(db, "ArtStyles");
  const querySnapshot = await getDocs(StylesCollection);
  const styleList = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return styleList;
};
