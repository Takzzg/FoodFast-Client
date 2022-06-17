import { useSelector } from "react-redux"
import { baseUrl } from "../../../redux/actions/async"
// import { FaStar } from "react-icons/fa"

import { StyledCategoryCard } from "./CategoryCard.styled"
// import { IMAGE_CATEGORY } from "../../../consts/images"

const CategoryCard = ({ category, url }) => {
    const { _id, name, description } = category

    const theme = useSelector((state) => state.theme.selectedTheme)

    return (
        <StyledCategoryCard theme={theme} key={_id} to={url}>
            {/* <img src={IMAGE_CATEGORY + _id} alt="XD" height={"100"}/> */}
            <img
                src={`url(${baseUrl}/categories/img/${_id})`}
                alt="XD"
                height={"100"}
            />
            <span className="name">{name}</span>
            <span className="description">
                {description || "Descripcion categoria"}
            </span>
        </StyledCategoryCard>
    )
}

export default CategoryCard
