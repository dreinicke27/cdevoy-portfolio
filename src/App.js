import { Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="contactcard" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
  );
}

export default App;

