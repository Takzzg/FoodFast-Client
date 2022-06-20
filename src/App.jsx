import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { fetchAllCategories, fetchAllProducts } from "./redux/actions/async"
import { useDispatch, useSelector } from "react-redux"

import GlobalStyle from "./GlobalStyles"
import DisplayProducts from "./components/DisplayProducts/index"
import ModifyCategory from "./components/Categories/CategoryUpdate"
import UpdateProduct from "./components/Products/updateProduct"
import Login from "./components/Auth/Login"
import Logup from "./components/Auth/Logup"
import NavBar from "./components/NavBar/NavBar"
import Landing from "./components/Landing/Landing"
import DetailProduct from "./components/Products/DetailProduct/DetailProduct"
import DetailCategory from "./components/Categories/DetailCategory/DetailCategoty"
import Dashboard from "./components/User/Dashboard/Dashboard"
import ProductForm from "./components/Products/ProductForm/ProductForm"
import CategoryForm from "./components/Categories/CategoryForm"
import Profile from "./components/User/Profile"
import Orders from "./components/Orders/Orders"
import DetailOrder from "./components/Orders/DetailOrder/DetailOrder"
import Reviews from "./components/Reviews/Reviews"
import DetailReview from "./components/Reviews/DetailReview/DetailReview"
import ShoppingCart from "./components/shopCart"

const ScrollToTop = (props) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return <>{props.children}</>
}

function App() {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.selectedTheme)

    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchAllCategories())
    }, [dispatch])

    return (
        <div className="App">
            <BrowserRouter>
                <GlobalStyle theme={theme} />

                <ScrollToTop>
                    <NavBar />

                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/products" element={<DisplayProducts />} />
                        <Route
                            path="/products/:idProduct"
                            element={<DetailProduct />}
                        />
                        <Route
                            path="/categories/:idCategory"
                            element={<DetailCategory />}
                        />

                        <Route path="/dashboard">
                            <Route index element={<Dashboard />} />
                            <Route
                                path="createProduct"
                                element={<ProductForm />}
                            />
                            <Route
                                path="createCategory"
                                element={<CategoryForm />}
                            />

                            <Route
                                path="modifyCategory/:id"
                                element={<ModifyCategory />}
                            />

                            <Route
                                path="updateProduct/:id"
                                element={<UpdateProduct />}
                            />
                        </Route>

                        <Route path="user/:idUser">
                            <Route index element={<Profile />} />
                            <Route path="orders">
                                <Route index element={<Orders />} />
                                <Route
                                    path=":idOrder"
                                    element={<DetailOrder />}
                                />
                            </Route>
                            <Route path="reviews">
                                <Route index element={<Reviews />} />
                                <Route
                                    path=":idReview"
                                    element={<DetailReview />}
                                />
                            </Route>
                        </Route>

                        <Route path="/user">
                            <Route path="shoppingCart" element={<ShoppingCart />}/>
                        </Route>

                        {/* LOGIN */}
                        <Route path="/login" element={<Login />} />
                        {/* REGISTER */}
                        <Route path="/logup" element={<Logup />} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    )
}

export default App
