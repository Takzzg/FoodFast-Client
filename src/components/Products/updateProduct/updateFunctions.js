import axios from "axios"

export const PostProductImg = (img) => 
    fetch("http://localhost:3001/api/v1/products/image", {
        method: 'POST',
        body: img
    })

export const PatchProduct = (form, imgCharge, file, setIsSend, setForm, setIsAvailable, setImgCharge) => {
    if(!file) {
        axios.patch(`http://localhost:3001/api/v1/products/${form._id}`, {
            name: form.name,
            description: form.description,
            price: form.price,
            stock: form.stock,
            categories: form.categories,
            img: form.img
        })
        .then(res=> setIsSend(true)).catch(err=> console.log(err))
        CleanProductsInput(setIsSend, setForm, setIsAvailable, setImgCharge)
    } else {
        const formdata = new FormData(); 
        formdata.append('imageProduct', file)
        PostProductImg(formdata).then(res=> res.json())
        .then(json=>  
            axios.patch(`http://localhost:3001/api/v1/products/${form._id}`, {
            name: form.name,
            description: form.description,
            price: form.price,
            stock: form.stock,
            categories: form.categories,
            img: json.img
        }))
        .then(res=> setIsSend(true)).catch(err=> console.log(err))
        CleanProductsInput(setIsSend, setForm, setIsAvailable, setImgCharge)
    }

}


export const CleanProductsInput = (setIsSend, setForm, setIsAvailable, setImgCharge) => {
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
    document.getElementById("fileinput").value = null;
}

