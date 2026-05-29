import { Outlet } from "react-router";
function MainLayout() {
  return (
    <div>
      <nav></nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default MainLayout;
