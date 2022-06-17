import React from "react";
import { MainContainer, NameCategory } from "./categoryElements";
import styles from "./category.module.scss"; 
import { IMAGE_CATEGORY } from "../../../consts/images";
const colors = ['#990000','#37E2D5','#D4D925','#FFEE63','#37E2D5',
'#590696','#C70A80','#FBCB0A','#000000','#FFC600','#E900FF','#1B2430']

const colorRandom = ()=> Math.floor(Math.random() * colors.length);

export default function CategoryCard ({category}){
    const BGCOLOR = colors[colorRandom()]
    return(
    <MainContainer bgColor = {BGCOLOR}>
        <img src={IMAGE_CATEGORY + category._id} height="100" alt="img"/>
        <NameCategory id={styles.categoryName}>{category.name}</NameCategory>
    </MainContainer>)
}