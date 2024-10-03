import Header from "../../../components/adminComponents/header/Header";
import DashboardNavbar from "../../../components/adminComponents/navbar/DashboardNavbar";
import DashboardMenu from "../../../components/adminComponents/dashboardMenu/DashboardMenu";

const AdminDashboard = () => {
  return (
    <section className="adminDashboard container">
      <Header />
      <div className="d-flex">
        <div className={`col-3 position-relative`}>
          <DashboardNavbar />
        </div>
        <div className={`col-9`}>
          <DashboardMenu />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
