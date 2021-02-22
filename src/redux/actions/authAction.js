import axios from "axios";
import {API_PATH} from "../../tools/constants";

export  function loginUser(data){
    axios.post(API_PATH + "api/v1/login", data)
        .then((res) => {
            console.log(res);
        })


}