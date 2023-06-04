import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtEko0hgqfMR0r2D0nzRpdYkp3TDH4mxE",
  authDomain: "lucxs-ea9a8.firebaseapp.com",
  projectId: "lucxs-ea9a8",
  storageBucket: "lucxs-ea9a8.appspot.com",
  messagingSenderId: "281845077327",
  appId: "1:281845077327:web:e3faac91e54813dadfa13a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

