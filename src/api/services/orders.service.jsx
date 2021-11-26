import { BaseUrl } from './BaseUrl';
import axios from 'axios';
class OrdersService{

    GetOrders(){
        let access_token= JSON.parse(localStorage.getItem('keys')).access
        return axios({
            method: "get",
            url: BaseUrl()+"api/products/order/",
            headers: { 
                Authorization: "Bearer " + access_token
             },
        })
    }
}

export  default new OrdersService();