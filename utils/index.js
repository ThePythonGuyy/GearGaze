import axios from "axios";

export async function fetchCars(filters) {
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: { make: filters.manufacturer || 'bmw' , 
              limit: filters.limit,
              fuel: filters.fuel,
              year: filters.year,
              model: filters.model
            },
    headers: {
      "X-RapidAPI-Key": "7dc50af0c2mshd76d098dfa43da0p1fc62bjsna1ff5920361c",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const res = await axios.request(options);
    return res.data;
  } catch (error) {
    console.log(error)
    return null;
  }
}

export function calCarRent(mpg, year) {
  const basePrice = 1000; // base price per day;

  const mileageFactor = 8;

  // const ageFactor = 0.05;

  const mileageRate = mpg * mileageFactor;
  // const ageRate = (new Date().getFullYear() ) * ageFactor;

  const rentPerDay = basePrice + mileageRate; // + ageRate;

  return rentPerDay? rentPerDay.toFixed(0) : 50;
}

export const generateCarImage = (car, angle) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`

}
