import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./assets/scss/global.scss";
import MenuProvider from "./assets/components/Lecture4Practice/Component1.jsx";
import { BrowserRouter } from "react-router-dom";
import store from "./assets/components/Lecture10/Store.jsx";
import { Provider } from "react-redux";

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

// import ContextProvider from './assets/components/Lecture4/contextAPI/contextAPI.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ContextProvider> */}

    {/* <MenuProvider> */}

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

    {/* </MenuProvider> */}

    {/* </ContextProvider> */}
  </StrictMode>,
);
