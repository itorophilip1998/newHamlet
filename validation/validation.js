let required  = (propertyType) => {
    return v => v && v.length > 0 || `you must input a ${propertyType}`
}

let minLength = (propertyType, minLength) =>{
    return v => v && v.length >= minLength || `${propertyType} must be at least ${minLength}` 
}

let maxLength = (propertyType, maxLength) =>{
    return v => v && v.length <= maxLength || `${propertyType} must be at least ${maxLength}` 
}
let emailFormat = () =>{
    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return v => v && regex.test(v) || "must be a valid email"
}
export default{
    required,
    minLength,
    maxLength,
    emailFormat
}