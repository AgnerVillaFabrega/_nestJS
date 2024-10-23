import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto} from './dto';

@Injectable()
export class CarsService {
  private cars: Car [] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
      year: '2020',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
      year: '2022',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
      year: '2019',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Highlander',
      year: '2024',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Sienna',
      year: '2000',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);
    if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
    
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id:uuid(),
      ...createCarDto
      // model: createCarDto.model,
      // brand: createCarDto.brand,
      // year: createCarDto.year,
    }
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto:UpdateCarDto){

    let carDB  = this.findOneById(id);
    if(updateCarDto.id && updateCarDto !== id)
      throw new BadRequestException(`Car id '${id}'is not valid`);

    this.cars = this.cars.map( car =>{
      if (car.id === id){
        carDB = { ...carDB, ...updateCarDto, id }
        return carDB;
      }
      return car;
    })

    return carDB; //update car

  }

  delete(id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter(car => car.id !== id);
    return `Car: '${car.id}' was deleted`; 
  }

}
