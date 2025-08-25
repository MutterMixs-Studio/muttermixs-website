import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter basename="/muttermixs-website">
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element}>
            {/* 👇 If a route has children, render them too */}
            {route.children &&
              route.children.map((child, cIdx) => (
                <Route
                  key={cIdx}
                  index={child.index}
                  path={child.path}
                  element={child.element}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
