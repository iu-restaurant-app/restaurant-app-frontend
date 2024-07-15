import axios from 'axios';
import { MealRequestResponse } from '@/api/meal/body/meal-request-response';

export default class MealService {
  static readonly MEAL_SERVICE_BASE_URL = `http://${process.env.NEXT_PUBLIC_BACKEND}:8080/meal`;

  static getAll(): Promise<MealRequestResponse[]> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        baseURL: this.MEAL_SERVICE_BASE_URL,
        url: '',
      })
        .then(response => {
          resolve(response.data as MealRequestResponse[]);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
