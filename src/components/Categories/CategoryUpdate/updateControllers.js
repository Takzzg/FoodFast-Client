
export  const handleUpdate = (e, file, PostCategoryImg, PatchCategory, setIsSend, form) => {
    e.preventDefault(); 
    if(file) {
        const formdata = new FormData()
        formdata.append('imageCategory', file);
        PostCategoryImg(formdata).then(res=> res.json())
        .then(json=> PatchCategory(form, json))
        .then(json=> setIsSend(true))
        .catch(err=> console.log(err))
        .finally(err=> {            
          console.log("Creo que se termino")
        })
    } else {
        PatchCategory(form._id, form.name, form.description, form.img)
        .then(json=> setIsSend(true))
        .catch(err=> console.log(err))
        .finally(err=> {            
          console.log("Creo que se termino")
        })
    }
}