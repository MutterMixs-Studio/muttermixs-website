import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <Header />
            <main className="flex-1 p-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
