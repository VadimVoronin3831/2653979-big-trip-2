import {CITIES, DESCRIPTION} from './const';
import {getRandomArrayElement, getRandomNumber} from '../utils';

export function createDestination(){
  return {
    id: crypto.randomUUID(),
    description: getRandomArrayElement(DESCRIPTION),
    desctinationImg: `https://loremflickr.com/248/152?random=${getRandomNumber(0, 10)}`,
    city: getRandomArrayElement(CITIES),
  };
}
