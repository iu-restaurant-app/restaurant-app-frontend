import axios from 'axios';
import { MealRequestResponse } from '@/api/meal/body/meal-request-response';

export default class MealService {
  static readonly MEAL_SERVICE_BASE_URL = 'http://31.129.98.43:8080/meal';

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

  static get(title: string): Promise<MealRequestResponse> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        baseURL: this.MEAL_SERVICE_BASE_URL,
        url: `/${title}`,
      })
        .then(response => {
          resolve(response.data as MealRequestResponse);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static create(meal: MealRequestResponse): Promise<void> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        baseURL: this.MEAL_SERVICE_BASE_URL,
        url: '',
        data: meal,
      })
        .then(response => {
          resolve(response.data as void);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static update(title: string, meal: MealRequestResponse): Promise<void> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'patch',
        baseURL: this.MEAL_SERVICE_BASE_URL,
        url: `/${title}`,
        data: meal,
      })
        .then(response => {
          resolve(response.data as void);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static delete(title: string): Promise<MealRequestResponse> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        baseURL: this.MEAL_SERVICE_BASE_URL,
        url: `/${title}`,
      })
        .then(response => {
          resolve(response.data as MealRequestResponse);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
