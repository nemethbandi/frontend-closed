import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg-soft)] text-[var(--text-primary)]">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
