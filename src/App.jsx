import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { useAuth } from "./hooks/useAuth";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Add } from "./pages/add/add";

export function App() {
  const [token] = useAuth();

  if (token) {
    return (

      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<Add/>} />
        </Routes>
      </Layout>

      
    );
  } 

  return <Login/>
}
