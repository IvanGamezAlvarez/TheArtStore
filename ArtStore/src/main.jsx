import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgSx0ZOhSasfjwGQdkbNgxKSxbS0Nr-z4",
  authDomain: "theartstore-a8507.firebaseapp.com",
  projectId: "theartstore-a8507",
  storageBucket: "theartstore-a8507.firebasestorage.app",
  messagingSenderId: "861405817927",
  appId: "1:861405817927:web:45c81696531903ea4ed562",
  measurementId: "G-C7341WYDMQ",
};

initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(<App />);
