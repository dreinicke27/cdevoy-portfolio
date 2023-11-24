import { Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Password from "./pages/Password";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contactcard" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="projects" element={<Password />} />
        </Route>
    </Routes>
  );
}

export default App;

