import { useSelector } from "react-redux"
import { FaDollarSign, FaPlus } from "react-icons/fa"
import { StyledProductCard } from "./ProductCard.styled"
import { baseUrl } from "../../../redux/actions/async"

const ProductCard = ({ product }) => {
    const { _id, name, price, description, available } = product

    const theme = useSelector((state) => state.theme.selectedTheme)

    return (
        <StyledProductCard theme={theme} key={_id} to={`/products/${_id}`}>
            <img
                className="img"
                src={`${baseUrl}/products/img/${_id}`}
                alt="img"
                height={"100"}
            />
            <div className="header">
                <span className="name">{name}</span>
                <span className="price">
                    <FaDollarSign />
                    {price}
                </span>
            </div>
            <span className="description">
                {description || "agregar descripcion"}
            </span>

            <button disabled={!available} className="addBtn">
                <FaPlus />
            </button>
        </StyledProductCard>
    )
}

export default ProductCard
