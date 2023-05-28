import { Sidebar } from "../sidebar";
import { Navbar } from "./navbar";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <div  className="mainFlex">
      <Sidebar />
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};
