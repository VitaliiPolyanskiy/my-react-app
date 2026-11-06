import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Крок перший: знаходимо елемент на веб-сторінці, 
// в який буде рендеритися React-застосунок
const rootElement = document.getElementById("app")!;
const root = ReactDOM.createRoot(rootElement);

// Крок другий: рендеринг у кореневий елемент.
// Переданий параметр — компонент, який потрібно відобразити на сторінці.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);