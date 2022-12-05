import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ProductDetail from "../pages/ProductDetail"
import Stores from "../pages/Store"
import Checkout from "../pages/Checkout"
import Menu from "../pages/Menu"

export const publicRoutes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/auth",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/products/:id",
        component: ProductDetail
    },
    {
        path: "/stores/",
        component: Stores
    },
    {
        path: "/checkout/",
        component: Checkout
    },
    {
        path: "/menu/",
        component: Menu
    },
]
//Required login
export const privateRoutes = [

]