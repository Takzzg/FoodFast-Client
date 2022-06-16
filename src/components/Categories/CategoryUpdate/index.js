import React, { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { findCatById } from "../../../redux/actions/async";
import { validateForm } from "../../CustomHooks/validateForm";
import { Message } from "rsuite";

import {    
    CreateButton, 
    PrevContainer, 
    PrevImgContainer, 
    PrevEmptyImgContainer,    
    ErrorMsg,
    GlobalContainer,
    InputContainer,
    InputFiled,
    InputSimple,
    Label,
    MainContainer,
    MessageContainer } from "./updateElements";
import { PatchCategory} from "./updateFunctions";


export default function ModifyCategory (){

    const { id } = useParams(); 
    const [form, setForm] = useState({name: "", description: "", img: null}); 
    const [errors, setErrors] = useState({});
    const [isSend, setIsSend] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false)

    const dispatch = useDispatch()
    const category = useSelector((state) => state.main.categories.detail)

    const [file, setFile] = useState(null);
    const [imgCharge, setImgCharge] = useState(false);

    const handleDeletePrev = () => {
        document.getElementById("imageCategory").value = null; 
        setFile(null)
      }
    
    const handleChangeFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        if (newFile) setImgCharge(true);
        else setImgCharge(false);
    };
    
    const handleChange = (e) => {
        const {name, value} = e.target; 
        setForm({...form, [name]: value})
        let currentErrors = validateForm({...form, [name]: value}, "category")
        setErrors(currentErrors)
    }

  
    useEffect(() => {
        dispatch(findCatById(id))
        setForm(category)
    }, [dispatch, id, category.name])
    
    return(
        <GlobalContainer>
        {isSend && (
          <MessageContainer color={"green"}>
            <Message showIcon type="success" header="Success" full>
              The product is updated correctly
            </Message>
          </MessageContainer>
        )}
  
        {isEmpty && (
          <MessageContainer color={"red"}>
            <Message showIcon type="error" header="Error">
              Product could not be update because of empty fields
            </Message>
          </MessageContainer>
        )}

        <MainContainer style={{display: "flex", flexDirection: "column"}}>
          <InputContainer>
            <Label>Category Name:</Label>
            <InputSimple
              onChange={handleChange}
              type={"text"}
              name="name"
              value={form.name}
              required
            />
            {
              <ErrorMsg error={errors.name ? true : false}>
                {errors.name}
              </ErrorMsg>
            }
          </InputContainer>
  
          <InputContainer>
            <Label>Description:</Label>
            <InputSimple
              onChange={handleChange}
              type={"text"}
              name="description"
              value={form.description}
              required
            />
            {
              <ErrorMsg error={errors.description ? true : false}>
                {errors.description}
              </ErrorMsg>
            }
          </InputContainer>
            {console.log(form.img)}
          <InputContainer>
            <Label>Image:</Label>
            <InputFiled
              type={"file"}
              onChange={handleChangeFile}
              id="imageCategory"
              name="imageCategory"
            />
            {file ? <PrevContainer>
              <button onClick={handleDeletePrev}>X</button>
              <PrevImgContainer>
                <img src={URL.createObjectURL(file)} alt="prevView" />
              </PrevImgContainer>
            </PrevContainer>:<PrevContainer>
              <PrevImgContainer>
                <img src={form.img} alt="prevView" />
              </PrevImgContainer>
              </PrevContainer>}
          </InputContainer>
  
          <div>
            <Link to={"/dashboard"}>
              <CreateButton
              color="green"
              onClick={()=>PatchCategory(form, file)}
              >
                Update Category
              </CreateButton>
            </Link>

          </div>
        </MainContainer>
      </GlobalContainer>
    )
}