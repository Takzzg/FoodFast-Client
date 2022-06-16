import axios from "axios"
import { delete_category, delete_product } from "../../redux/actions/sync"

const baseUrl = "http://localhost:3001/api/v1"

export default function useDelete (dispatch) {

    const handleDelete = (type, id, imgPath) => {
        if(type === "products") {
            axios.delete(" http://localhost:3001/api/v1/products/image/delete", {
                completeRoute: imgPath
            }).then(res=> res.json()).then(res=> console.log(res)).catch(err=> console.log(err))

            dispatch(delete_product(id))
       } else if(type === "categories") {
           dispatch(delete_category(id))
       } 
        axios.delete(`${baseUrl}/${type}/${id}`)
        .then(()=> console.log("borrado XD"))
        .catch((err)=> console.log(err))
        
    }

    return {handleDelete}
}