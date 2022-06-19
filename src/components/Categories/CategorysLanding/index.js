import React from "react"
import { MainContainer, NameCategory } from "./categoryElements"
import styles from "./category.module.scss"
import { baseUrl } from "../../../redux/actions/async"
import { Link } from "react-router-dom"

const CategoryCard = ({ category, url, color }) => (
    <Link to={url}>
        <MainContainer backcolor={color}>
            <img
                src={`${baseUrl}/categories/img/${category._id}`}
                height="100"
                alt="img"
            />
            <NameCategory id={styles.categoryName}>
                {category.name}
            </NameCategory>
        </MainContainer>
    </Link>
)

export default CategoryCard
