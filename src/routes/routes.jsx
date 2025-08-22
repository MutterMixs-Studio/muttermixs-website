import Layout from "../components/Layout";
import Home from "../pages/Home";
import GameDetail from "../pages/GameDetail";
import About from "../pages/About";
import Games from "../pages/Games";
import { Navigate } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "games/:slug", element: <GameDetail /> },
            { path: "about", element: <About /> },
            { path: "games", element: <Games /> },
            // Redirection
            { path: "blockline64", element: <Navigate to="/games/blockline64" replace /> },
        ],
    },
];

export default routes;