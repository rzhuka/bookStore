import api from 'infrastructure/axios';
import type { Inventory } from './types';
import type { AxiosRequestConfig } from 'axios';

export const fetchProduct = (config?: AxiosRequestConfig) =>
    api.get<Inventory>('/books.json', config);
