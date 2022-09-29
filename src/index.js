import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from "./routes/root";
import Contact from "./routes/contact";
import PersonalInfo from "./routes/personal-info";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contacts/:id",
        element: <PersonalInfo />,
      }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// const getEpisodeData = () => {

//   var episodes = [];
//   console.log("getEpisodeData");
//   console.log(episode);
//   for (const e of episode) { 
//     console.log("loop e")
//     fetch(e)
//       .then((res) => res.json())
//       .then((json) => {
// //          console.log(json); 
//         episodes.push(json);
//       })
//   }
//   console.log(episodes);
//   fetchEpisodes(episodes);
// }