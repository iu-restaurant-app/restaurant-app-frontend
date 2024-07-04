import axios from "axios";
import {MealCreateRequest} from "@/api/meal/request/meal-create-request";

export default class MealService {
    static readonly MEAL_SERVICE_BASE_URL = "http://10.90.137.110:8080/meal";

    static get(title: string) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                baseURL: this.MEAL_SERVICE_BASE_URL,
                url: "/" + title
            })
                .then((response) => {
                    resolve(response.data as MealCreateRequest)
            })
                .catch((error) => {
                    console.log(error)
                })
        })
    }
}