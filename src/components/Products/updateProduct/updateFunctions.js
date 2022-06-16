import axios from "axios"

export const PostCategoryImg = (img) => 
    fetch("http://localhost:3001/api/v1/products/image", {
        method: 'POST',
        body: img
    })

export const PatchCategory = (form, routeResponse) => 
    axios.patch(`http://localhost:3001/api/v1/products/${form._id}`, {
        name: form.name,
        description: form.description,
        price: form.price,
        stock: form.stock,
        categories: form.categories,
        img: routeResponse
    })

export const CleanCategoryImputs = (setIsSend, setForm, setIsAvailable, setImgCharge) => {
    setTimeout(()=> {
        setIsSend(false)
      }, 5000)
    setForm({
      name: "",
      description: "",
      img: null
    })
    setIsAvailable(false)   
    setImgCharge(false)
    document.getElementById("imageCategory").value = null;
}

