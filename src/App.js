import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
