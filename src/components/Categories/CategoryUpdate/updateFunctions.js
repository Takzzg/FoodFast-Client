import axios from "axios"

export const PostCategoryImg = (img) => 
    fetch("http://localhost:3001/api/v1/categories/image", {
        method: 'POST',
        body: img
    })

export const PatchCategory = (form, file) =>{
    if(!file) {
        axios.patch(`http://localhost:3001/api/v1/categories/${form._id}`, {
            name: form.name,
            description: form.description, 
            img: form.img
            })
    } else {
        const formdata = new FormData(); 
        formdata.append('imageCategory', file)
        PostCategoryImg(formdata)
        .then(res=> res.json())
        .then(json=> 
            axios.patch(`http://localhost:3001/api/v1/categories/${form._id}`, {
                name: form.name,
                description: form.description, 
                img: json.img
                })
            ) 
    }} 
    

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