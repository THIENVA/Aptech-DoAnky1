import { Outlet } from "react-router-dom";
function DashboardLayout() {
  return (
    <div>
      {" "}
      <nav></nav>
      <sidebar></sidebar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default DashboardLayout;
