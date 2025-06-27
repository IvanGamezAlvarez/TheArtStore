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
