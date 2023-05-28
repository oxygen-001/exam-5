import "./navbar.css";
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
export const Navbar = () => {
  const navigate = useNavigate();
  const [token] = useAuth();
  const onAdd = () => {
    if(token){
        navigate('/add')
    }else{
       
        navigate('/login')

    }
  };

  return (
    <div className="navbarFlex">
      <div>
        <h1>Invoices</h1>
        <p className="navbarP">There are 6 total invoices</p>
      </div>

      <div className="secondNavbarFlex">
        <select name="select">
          <option value="Filter by status">Filter by status</option>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>

        <button onClick={onAdd} className="navbarbutton">
          <img className="plus" src={logo} alt="" />
          New Invoice
        </button>
      </div>
    </div>
  );
};
