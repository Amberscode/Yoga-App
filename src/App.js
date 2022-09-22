import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
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
import YourClasses from "./pages/YourClasses";
import ScrollToTop from "./ScrollToTop";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {!authCtx.isLoggedIn && <Route path="login" element={<Login />} />}
        {!authCtx.isLoggedIn && <Route path="signup" element={<SignUp />} />}
        <Route path="about" element={<About />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="contact" element={<Contact />} />
        <Route path="hatha" element={<Hatha />} />
        <Route path="vinyasa" element={<Vinyasa />} />
        <Route path="yin" element={<Yin />} />
        <Route path="aerial" element={<Aerial />} />
        <Route path="acro" element={<Acro />} />
        <Route path="power" element={<Power />} />
        {authCtx.isLoggedIn && (
          <Route path="yourclasses" element={<YourClasses />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
