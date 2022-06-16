import dateFormat from "dateformat"
import { useSelector } from "react-redux"
import { StyledReviewCard } from "./ReviewCard.styled.js"

const ReviewCard = ({ review }) => {
    const { userId, productId, title, score, comment, date } = review

    const theme = useSelector((state) => state.theme.selectedTheme)

    return (
        <StyledReviewCard theme={theme}>
            <h3>{title}</h3>
            <p>{score}/5</p>
            <p>{comment}</p>
            <p>fecha: {dateFormat(date, "dd/mm/yyyy")}</p>
            <p>user ID: {userId}</p>
            <p>product ID: {productId}</p>
        </StyledReviewCard>
    )
}

export default ReviewCard
