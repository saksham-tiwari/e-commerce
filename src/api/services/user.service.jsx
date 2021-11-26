import { BaseUrl } from './BaseUrl';
import axios from 'axios';
class UserService{

    UserDetails(){
        let access_token= JSON.parse(localStorage.getItem('keys')).access

        return axios
        .get(BaseUrl()+"api/Account/details/", {
            headers:{
                Authorization: "Bearer " + access_token
            }
            })
    }

    UpdateDetails(fd){
        let access_token = JSON.parse(localStorage.getItem("keys")).access;
        return axios({
            method: "put",
            url: BaseUrl()+"api/Account/update-account/",
            data: fd,
            headers: { 
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + access_token
             },
          })

    }
    
}

export  default new UserService();