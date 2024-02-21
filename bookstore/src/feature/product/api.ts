import api from 'infrastructure/axios';
import type { Inventory } from './types';

export const fetchProduct = () => api.get<Inventory>('/books.json');
