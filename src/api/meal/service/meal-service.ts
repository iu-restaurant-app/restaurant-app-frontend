import axios from 'axios';
import { MealRequestResponse } from '@/api/meal/body/meal-request-response';

export default class MealService {
  static readonly MEAL_SERVICE_BASE_URL = 'http://10.90.137.110:8080/meal';

  static get(title: string): Promise<MealRequestResponse> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        baseURL: this.MEAL_SERVICE_BASE_URL,
        url: '/' + title,
      })
        .then(response => {
          resolve(response.data as MealRequestResponse);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

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
