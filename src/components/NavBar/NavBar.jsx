import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
    GlobalContainer,
    MainIconContainer,
    NavBarContainer,
    LoginRegisterButton,
    Title,
    ButtonsContainer,
    OpenButton,
    CloseButton,
    Divider
} from "./NavBar.styled"
import { IoFastFoodSharp } from "react-icons/io5"
import { FaUserAlt } from "react-icons/fa"
import { GiHamburgerMenu, GiArchiveRegister } from "react-icons/gi"
import { AiFillCloseCircle } from "react-icons/ai"

import { useDispatch, useSelector } from "react-redux"
import { switchTheme } from "../../redux/actions/sync"

const NavBar = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.selectedTheme)

    const [showNavbar, setShowNavbar] = useState(false)
    const handleSelectRoute = () => {
        setShowNavbar(false)
    }

    const NavLink = ({ url, children }) => (
        <Link className="navLink" to={url} onClick={handleSelectRoute}>
            {children}
        </Link>
    )

    return (
        <GlobalContainer theme={theme}>
            <OpenButton
                onClick={() => setShowNavbar(true)}
                isShowing={showNavbar}
            >
                <GiHamburgerMenu id={"HambugerMenu"} />
            </OpenButton>

            <NavBarContainer theme={theme} isShowing={showNavbar}>
                <CloseButton
                    onClick={() => setShowNavbar(false)}
                    isShowing={showNavbar}
                >
                    <AiFillCloseCircle id={"close"} />
                </CloseButton>

                <MainIconContainer theme={theme}>
                    <IoFastFoodSharp />
                    <Title theme={theme}>Food Fast</Title>
                </MainIconContainer>

                <ButtonsContainer theme={theme}>
                    <LoginRegisterButton theme={theme}>
                        <Link to="/login">
                            <FaUserAlt />
                            Login
                        </Link>
                    </LoginRegisterButton>

                    <LoginRegisterButton theme={theme}>
                        <Link to="/logup">
                            <GiArchiveRegister />
                            Register
                        </Link>
                    </LoginRegisterButton>
                </ButtonsContainer>

                <Divider theme={theme} />

                <h3>CONSUMER</h3>
                <NavLink url="/">Home</NavLink>
                <NavLink url="/products">Products</NavLink>
                <NavLink url="/">My orders</NavLink>
                <NavLink url="/">Oferts</NavLink>
                <NavLink url="/">Contact</NavLink>

                <Divider theme={theme} />

                <h3>SELLER</h3>
                <NavLink url="/dashboard">DashBoard</NavLink>
                <NavLink url="/">Contact</NavLink>

                <button onClick={() => dispatch(switchTheme())}>
                    Switch to {theme.name === "light" ? "dark" : "light"} theme
                </button>
            </NavBarContainer>
        </GlobalContainer>
    )
}

export default NavBar
