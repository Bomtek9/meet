// src/api.js

import mockData from "./mock-data";

export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

export const getEvents = async () => {
  return mockData;
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem("access_token");

  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");

    if (!code) {
      const response = await fetch(
        "https://k6z8ae60ne.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const result = await response.json();
      const { authUrl } = result;
      return (window.location.href = authUrl);
    }

    return code && getToken(code);
  }

  return accessToken;
};
