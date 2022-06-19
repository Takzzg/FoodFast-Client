import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Banner from "./Banner/Banner"
import CategoryBar from "./UbicationBar/UbicationBar"
import { CategoriesContainer, GlobalContainer } from "./landingElements"
import CategoryCard from "../Categories/CategorysLanding"
import { useEffect } from "react"
import { searchCategory } from "../../redux/actions/async"

const Landing = () => {
    const categories = useSelector((state) => state.main.categories.all)
    const filterCategories = useSelector(
        (state) => state.main.categories.filtered
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchCategory(""))
    }, [dispatch])

    const getColor = (i) => `hsl(${(255 / categories.length) * i}, 100%, 33%)`

    return (
        <GlobalContainer>
            <Banner />
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <CategoryBar className="LocationBar" />
            </div>
            <CategoriesContainer>
                {filterCategories.length === 0
                    ? categories.map((c, i) => (
                          <CategoryCard
                              key={c._id}
                              category={c}
                              color={() => getColor(i)}
                              url={`/categories/${c._id}`}
                          />
                      ))
                    : filterCategories.map((c, i) => (
                          <CategoryCard
                              key={c._id}
                              category={c}
                              color={() => getColor(i)}
                              url={`/categories/${c._id}`}
                          />
                      ))}
            </CategoriesContainer>
        </GlobalContainer>
    )
}

export default Landing
