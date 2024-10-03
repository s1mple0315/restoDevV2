import { useContext } from "react";
import { AdminDashboardContext } from "../../../context/adminDashboardContext/adminDashboardContext";

const DashboardMenuItem = () => {
  const { menuItems, fetchAdminDashboardMenuItems, loading, error } = useContext(AdminDashboardContext);
    console.log(menuItems);

    
    


  return <div className="d-flex">DashboardMenuItem</div>;
};

export default DashboardMenuItem;
