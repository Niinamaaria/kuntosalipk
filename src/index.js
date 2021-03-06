import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import StartUp from './components/startup';

const firebaseConfig = {
  apiKey: "AIzaSyCE4nufAico-RlbZ43zlqEd3CqZSDpM4uk",
  authDomain: "kuntosalipaivakirja.firebaseapp.com",
  projectId: "kuntosalipaivakirja",
  storageBucket: "kuntosalipaivakirja.appspot.com",
  messagingSenderId: "710536955208",
  appId: "1:710536955208:web:afd5f098c98a4d10a25f7d",
  measurementId: "G-P7VM6J9BX7"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthCheck fallback={<StartUp />}>
      <App />
      </AuthCheck>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
