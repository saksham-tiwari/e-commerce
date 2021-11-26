import { BaseUrl } from './BaseUrl';
import axios from 'axios';
class WishlistService{

    GetProducts(){
        let access_token= JSON.parse(localStorage.getItem('keys')).access
        return axios({
            method: "get",
            url: BaseUrl()+"api/products/wishlist/",
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
    }
    
    DeleteProduct(args){
        let access_token= JSON.parse(localStorage.getItem('keys')).access
        return axios({
            method: "delete",
            url: BaseUrl()+"api/products/wishlist/",
            data: args,
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
    }
}

export  default new WishlistService();