export const roundedPopulation = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + 'Bn';
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + 'M';
  } else {
    return Math.round(num / 100) / 10 + 'K';
  }
};

export const percentageOfPopulation = (active, total) => {
  return ((100 * active) / total).toFixed(2);
};

export const checkCountryCode = (code) => {
  switch (code) {
    case 'GB':
      return 'UK';
    default:
      return code;
  }
};

export const getApiCountryName = (country) => {
  switch (country) {
    case 'United States of America':
      return 'USA';
    case 'Dominican Rep.':
      return 'Dominican-Republic';
    case 'Saudi Arabia':
      return 'Saudi-Arabia';
    case 'Dem. Rep. Congo':
      return 'Congo';
    case 'South Africa':
      return 'South-Africa';
    case 'New Zealand':
      return 'New-Zealand';
    case 'Papua New Guinea':
      return 'Papua-New-Guinea';
    case 'Puerto Rico':
      return 'Puerto-Rico';
    case 'El Salvador':
      return 'El-Salvador';
    case 'Costa Rica':
      return 'Costa-Rica';
    case 'New Caledonia':
      return 'New-Caledonia';
    case 'Solomon Is.':
      return 'Solomon-Islands';
    case 'South Korea':
      return 'South-Korea';
    case 'North Korea':
      return 'North-Korea';
    case 'W. Sahara':
      return 'Western-Sahara';
    case 'Bosnia and Herz.':
      return 'Bosnia-and-Herzegovina';
    case 'United Kingdom':
      return 'United-Kingdom';
    case "Côte d'Ivoire":
      return 'Ivory-Coast';
    case 'Sierra Leone':
      return 'Sierra-Leone';
    case 'Burkina Faso':
      return 'Burkina-Faso';
    case 'Central African Rep.':
      return 'Central African Rep. ';
    case 'S. Sudan':
      return 'South-Sudan';
    default:
      return country;
  }
};
