"use strict";
const host = "https://restcountries.eu/rest/v2";

const Countries = async ( filters ) => {
  const joined_filters = filters.join(';')
  const url = `${host}/all?fields=${joined_filters}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};


export { Countries };