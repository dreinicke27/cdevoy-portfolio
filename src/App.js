import { Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/mywork" element={<MyWork />} /> */}
        </Route>
    </Routes>
  );
}

export default App;

