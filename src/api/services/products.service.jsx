import { BaseUrl } from './BaseUrl';
import axios from 'axios';
class ProductsService{

    GetProducts(){
        return axios
        .get(BaseUrl()+"api/products/")
    }

    AddProduct(fd){
        let access_token = JSON.parse(localStorage.getItem("keys")).access;
        return axios({
            method: "post",
            url: BaseUrl()+"api/products/add-product/",
            data: fd,
            headers: { 
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + access_token
             },
          })
    }

    SearchProducts(query){
        return axios
        .get(BaseUrl()+ "api/products/search-product/?search="+query)
    }

    AddToWishlist(id){
        let access_token = JSON.parse(localStorage.getItem("keys")).access;
        // axios.put("https://vshopappdjango.herokuapp.com/api/products/wishlist/", {id:props.match.params.id, quantity:1})
        return axios({
            method: "put",
            url: BaseUrl()+ "api/products/wishlist/",
            data: id,
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
    }

    AddToCart(obj){
        let access_token = JSON.parse(localStorage.getItem("keys")).access;
        return axios({
            method: "put",
            url: BaseUrl()+"api/products/cart/add-product/",
            data: obj,
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
    }
    
    AddComment(arg){
        let access_token = JSON.parse(localStorage.getItem("keys")).access;
        return axios({
            method: "post",
            url: BaseUrl()+"api/products/add-comment/",
            data: arg,
            headers: { 
                Authorization: "Bearer " + access_token
            },
        })
    }
}

export  default new ProductsService();