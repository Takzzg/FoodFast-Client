import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { postReview } from "../../../redux/actions/async"
import { StyledReviewForm } from "./ReviewForm.styled"

const ReviewForm = () => {
    const [form, setform] = useState({ title: "", comment: "", score: 0 })

    const dispatch = useDispatch()
    const { idProduct } = useParams()
    const userId = useSelector((state) => state.user._id)

    const handleSetForm = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (!form.title || !form.comment || !form.score)
            return alert("missing info")

        console.log("creando review")

        let review = { userId, productId: idProduct, date: new Date(), ...form }
        console.log(review)
        dispatch(postReview(review))
    }

    return (
        <StyledReviewForm>
            <h1>Crear una nueva reseña</h1>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="title">Titulo</label>
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleSetForm}
                />
                <label htmlFor="score">Puntaje</label>
                <input
                    type="number"
                    name="score"
                    id="score"
                    value={form.score}
                    onChange={handleSetForm}
                    min="0"
                    max="5"
                    step="1"
                />
                <label htmlFor="comment">Comentario</label>
                <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="5"
                    onChange={handleSetForm}
                />
            </form>
            <input
                type="submit"
                value="Agregar nueva Review"
                onClick={handleSubmit}
            />
        </StyledReviewForm>
    )
}

export default ReviewForm
