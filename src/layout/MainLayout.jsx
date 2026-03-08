import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="closedai-app min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(243,255,185,0.25),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(136,162,170,0.2),transparent_38%)]" />
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
