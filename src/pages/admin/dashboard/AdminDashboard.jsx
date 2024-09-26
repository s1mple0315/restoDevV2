import Header from "../../../components/adminComponents/header/Header"
import DashboardNavbar from "../../../components/adminComponents/navbar/DashboardNavbar"

const AdminDashboard = () => {
  return (
    <section className="adminDashboard container position-relative">
        <Header />
        <DashboardNavbar />
    </section>
  )
}

export default AdminDashboard