import axios from "../axios";

class GetService {
    createPost = async (data,url) => {
        console.log("form data: " + data)
        const promise = new Promise((resolve, reject) => {
            axios.post(url, data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }
}
export default new GetService();