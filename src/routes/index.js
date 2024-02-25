import HomePage from "../pages/HomePage/HomePage"
import CartPage from "../pages/CartPage/CartPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PayPage from "../pages/PayPage/PayPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import ProductPage from "../pages/ProductPage/productPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage"

export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true
    },
    {
        path: "/order",
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: "/cart",
        page: CartPage,
        isShowHeader: true
    },
    {
        path: "/login",
        page: LoginPage,
        isShowHeader: true
    },
    {
        path: "/pay",
        page: PayPage,
        isShowHeader: true
    },
    {
        path: "/register",
        page: RegisterPage,
        isShowHeader: true
    },
    {
        path: "/product",
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: "/type",
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: "*",
        page: NotFoundPage
    },
]