import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchReviews } from "../../redux/actions/async"
import ReviewCard from "./ReviewCard/ReviewCard"

const Reviews = () => {
    const { idUser } = useParams()
    const dispatch = useDispatch()
    const reviews = useSelector((state) => state.main.reviews.all)

    useEffect(() => {
        dispatch(fetchReviews("user", idUser))
    }, [dispatch, idUser])

    return (
        <div>
            Reviews usuario {idUser}
            {!!reviews.length && (
                <div>
                    {reviews.map((r) => (
                        <ReviewCard key={r._id} review={r} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Reviews
