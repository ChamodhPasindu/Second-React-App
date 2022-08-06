import axios from "axios";

const instanse=axios.create({
    baseURL:'https://fakestoreapi.com/'
})
export default instanse;