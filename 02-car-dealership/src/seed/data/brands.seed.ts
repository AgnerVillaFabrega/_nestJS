import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Volvo',
    cratedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Toyota',
    cratedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Jeep',
    cratedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Tesla',
    cratedAt: new Date().getTime(),
  },
];
