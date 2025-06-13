import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Flight API calls
export const searchFlights = async (data: {
  source: string;
  destination: string;
  departure_date: string;
  return_date: string;
  userId: string;
}) => {
  const response = await api.post('/flights/search', {
    ...data,
    userid: data.userId
  });
  
  console.log('Flight API Response:', response.data); // Add for debugging
  return response.data;
};

export const getFlightHistory = async (userId: string) => {
  const response = await api.get(`/flights/search/history?userid=${userId}`);
  return response.data;
};

// Research API calls
export const researchDestination = async (data: {
  destination: string;
  theme: string;
  activities: string;
  num_days: number;
  budget: string;
  flight_class: string;
  hotel_rating: string;
  visa_required: boolean;
  insurance_required: boolean;
  userId: string;
}) => {
  const response = await api.post('/research/destination', {
    ...data,
    userid: String(data.userId)
  });
  return response.data;
};

export const getResearchHistory = async (destination: string, userId: string) => {
  const response = await api.get(`/research/destination/${destination}/history?userid=${String(userId)}`);
  return response.data;
};

// Hotels & Restaurants API calls
export const searchHotelsRestaurants = async (data: {
  destination: string;
  theme: string;
  activity_preferences: string;
  hotel_rating: string;
  budget: string;
  userId: string;
}) => {
  const response = await api.post('/hotels-restaurants/search', {
    ...data,
    userid: data.userId
  });
  // Extract the actual data from the API response wrapper
  return response.data.data || response.data;
};

export const getHotelRestaurantHistory = async (destination: string, userId: string) => {
  const response = await api.get(`/hotels-restaurants/destination/${destination}/history?userid=${userId}`);
  return response.data;
};

// Itinerary API calls
export const generateItinerary = async (data: {
  destination: string;
  theme: string;
  activities: string;
  num_days: number;
  budget: string;
  flight_class: string;
  hotel_rating: string;
  visa_required: boolean;
  insurance_required: boolean;
  userId: string;
}) => {
  const response = await api.post('/itinerary/generate', {
    ...data,
    userid: data.userId
  });
  return response.data;
};

export const getItineraries = async (destination: string, userId: string, page: number = 1, limit: number = 10) => {
  const response = await api.get(`/itinerary/destination/${destination}?page=${page}&limit=${limit}&userid=${userId}`);
  return response.data;
};

export const getUserItineraryHistory = async (userId: string) => {
  const response = await api.get(`/itinerary/history?userid=${userId}`);
  return response.data;
};