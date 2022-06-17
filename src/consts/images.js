
export const IMAGE_CATEGORY = process.env.NODE_ENV === 'production' ? "https://food-fast-api.herokuapp.com/api/v1/categories/img" :"http://localhost:3001/api/v1/categories/img/"
export const IMAGE_PRODUCT = process.env.NODE_ENV === 'production' ? "https://food-fast-api.herokuapp.com/api/v1/products/img":"http://localhost:3001/api/v1/products/img/"