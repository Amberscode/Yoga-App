import { Route, Routes, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Hatha from "./pages/Hatha";
import Vinyasa from "./pages/Vinyasa";
import Yin from "./pages/Yin";
import Aerial from "./pages/Aerial";
import Acro from "./pages/Acro";
import Power from "./pages/Power";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="contact" element={<Contact />} />
        <Route path="hatha" element={<Hatha />} />
        <Route path="vinyasa" element={<Vinyasa />} />
        <Route path="yin" element={<Yin />} />
        <Route path="aerial" element={<Aerial />} />
        <Route path="acro" element={<Acro />} />
        <Route path="power" element={<Power />} />
      </Routes>
    </Layout>
  );
}

export default App;
