"use strict";

const host = "https://restcountries.eu/rest/v2";

const Countries = async filters => {
  const joined_filters = filters.join(";");
  const url = `${host}/all?fields=${joined_filters}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const countryByName = async name => {
  try {
    const url = `${host}/name/${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error
  }
};

export { Countries, countryByName };
