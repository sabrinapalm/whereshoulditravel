import { getApiCountryName, checkCountryCode } from './helpers';

const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export const getCovidStatistics = async (country) => {
  const countryName = getApiCountryName(country);
  try {
    const response = await fetch(
      `https://covid-193.p.rapidapi.com/statistics?country=${countryName}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          useQueryString: true,
        },
      }
    );
    const data = await response.json();
    if (data.response[0]) {
      return data.response[0];
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};

export const getFlightMinPrice = async (countryCode) => {
  const ISOcode = checkCountryCode(countryCode);
  try {
    const response = await fetch(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/SE/EUR/sv-SE/SE-sky/${ISOcode}-sky/anytime`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host':
            'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        },
      }
    );
    const data = await response.json();
    if (data.Quotes.length > 0) {
      return data.Quotes[0].MinPrice;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};

export const getTravelAdvisories = async (countryCode) => {
  try {
    const response = await fetch(
      `https://www.travel-advisory.info/api?countrycode=${countryCode}`,
      {
        method: 'GET',
      }
    );
    const result = await response.json();
    if (
      result.data &&
      result.data[countryCode] &&
      result.data[countryCode].advisory
    ) {
      return result.data[countryCode].advisory;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};
