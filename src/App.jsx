import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/personal-page" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
