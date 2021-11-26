import { BaseUrl } from './BaseUrl';
import axios from 'axios';
class AuthService{
    
    LogIn(userCredentials){
        return axios
        .post((BaseUrl()+"api/Account/login/"),userCredentials)
    }

    SignUp(userCredentials){
        return axios
        .post((BaseUrl()+"api/Account/create-account/"),userCredentials)
    }

    OtpVerify(creds){
        return axios
        .post((BaseUrl()+"api/Account/otp/verify/"),creds)
    }

    EmailVerify(creds){
        return axios
        .post((BaseUrl()+"api/Account/email-verify/"),creds)
    }

    GetToken(creds){
        return axios
        .post((BaseUrl()+"api/token/"),creds)
    }

    BecomeSeller(){
        let access_token = JSON.parse(localStorage.getItem("keys")).access;

        return axios({
            method: "put",
            url: BaseUrl()+"api/Account/become-seller/",
            headers: { 
                Authorization: "Bearer " + access_token
                },
            })
    }

    ChangePassword(creds){
        return axios
        .post((BaseUrl())+"api/Account/reset-password/change-password/",creds)
    }
}

export  default new AuthService();