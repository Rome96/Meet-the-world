"use strict";
const host = "https://restcountries.eu/rest/v2";

const Countries = async () => {
  const url = `${host}/all`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("veaa", data);
  return data;
};


export { Countries };
