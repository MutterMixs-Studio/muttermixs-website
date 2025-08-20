import Layout from "../components/Layout";
import Home from "../pages/Home";
import GameDetail from "../pages/GameDetail";
import About from "../pages/About";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "games/:id", element: <GameDetail /> },
            { path: ":id", element: <GameDetail /> },
            { path: "about", element: <About /> },
        ],
    },
];

export default routes;