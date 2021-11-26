import { BaseUrl } from './BaseUrl';
import axios from 'axios';
class CartService{

    GetProducts(){
        let access_token= JSON.parse(localStorage.getItem('keys')).access
        return axios({
            method: "get",
            url: BaseUrl()+"api/products/cart/",
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
    }

    Checkout(fd){
        let access_token= JSON.parse(localStorage.getItem('keys')).access
        return axios({
            method:"post",
            url:BaseUrl()+"api/products/checkout-transaction/",
            data: fd,
            headers:{
                "Content-Type": "multipart/form-data", 
                Authorization: "Bearer " + access_token
            },
        })

    }

    Order(){
        let access_token= JSON.parse(localStorage.getItem('keys')).access
        return axios({
            method:"put",
            url:BaseUrl()+"api/products/order/checkout/",
            headers:{
                Authorization: "Bearer " + access_token
            }
        })
    }

    AddProduct(args){
        let access_token = JSON.parse(localStorage.getItem("keys")).access;
        return axios({
            method: "put",
            url: BaseUrl()+"api/products/cart/add-product/",
            data: args,
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
    }

    DeleteProduct(args){
        let access_token= JSON.parse(localStorage.getItem('keys')).access
        return axios({
            method: "delete",
            url: BaseUrl()+"api/products/cart/remove-product/",
            data: args,
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
    }
    
    DeleteProducts(args){
        let access_token= JSON.parse(localStorage.getItem('keys')).access
        return axios({
            method: "delete",
            url: BaseUrl()+"api/products/cart/delete-product/",
            data: args,
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
    }
}

export  default new CartService();