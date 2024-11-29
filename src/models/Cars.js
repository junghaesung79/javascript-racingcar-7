import { Car } from './index.js';

class Cars {
  constructor(names) {
    const cars = names.map((name) => {
      return new Car(name);
    });
  }
}

export default Cars;
