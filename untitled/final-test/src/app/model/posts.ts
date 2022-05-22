import {Category} from './category';
import {Province} from './province';
import {Direction} from './direction';

export interface Posts {
  id?: number;
  category?: Category;
  province?: Province;
  seller?: string;
  typeOfPost?: string;
  condition?: string;
  address?: string;
  area?: number;
  direction?: Direction;
  title?: string;
  content?: string;
  price?: number;
  startDate?: string;
  status?: string;
  deleteFlag?: boolean;
}
