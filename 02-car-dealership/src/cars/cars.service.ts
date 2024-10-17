import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2022,
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
      year: 2019,
    },
    {
      id: 4,
      brand: 'Toyota',
      model: 'Highlander',
      year: 2024,
    },
    {
      id: 5,
      brand: 'Toyota',
      model: 'Sienna',
      year: 2000,
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find(car => car.id === id);
    if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
    
    return car;
  }
}
