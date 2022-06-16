import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import { fetchAllCategories, fetchAllProducts } from "./redux/actions/async"
import { useDispatch, useSelector } from "react-redux"
import DisplayProducts from "./components/DisplayProducts/index"
import {
    Auth,
    Categories,
    CategoryForm,
    Dashboard,
    DetailCategory,
    DetailOrder,
    DetailProduct,
    DetailReview,
    Landing,
    NavBar,
    Orders,
    ProductForm,
    Products,
    Profile,
    Reviews
} from "./components"
import GlobalStyle from "./GlobalStyles"
import Login from "./components/Auth/Login"
import Logup from "./components/Auth/Logup"
import PasswordReset from "./components/Auth/PasswordReset"

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
                            path="/category/:idCategory"
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
                        </Route>

                    {/* Hay dos dashboards */}
                        <Route path="/dashboard/products">
                            <Route index element={<Products />} />
                            <Route
                                path=":idProduct"
                                element={<DetailProduct />}
                            />
                        </Route>

                        <Route path="categories">
                            <Route index element={<Categories />} />
                            <Route
                                path=":idCategory"
                                element={<DetailCategory />}
                            />
                        </Route>

                        <Route path="/auth" element={<Auth />} />

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

                        {/* LOGIN */}
                        <Route path="/login" element={<Login/>}/>
                        {/* REGISTER */}
                        <Route path="/logup" element={<Logup/>}/>
                        {/* PASS RESET */}
                        <Route path="/passwordReset" element={<PasswordReset/>}/>
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    )
}

export default App
