import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

console.log('API_BASE_URL configured as:', API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor to handle 429 errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 429) {
      // This will be caught by the calling component
      throw new Error('Free plan limit reached (15 POST calls/month). Please upgrade to Travel Master for unlimited access.');
    }
    throw error;
  }
);

// Subscription API calls
export const getSubscriptionStatus = async (userId: string) => {
  try {
    const url = `/subscription/status?userid=${userId}`;
    console.log('Making request to:', `${API_BASE_URL}${url}`);
    const response = await api.get(url);
    console.log('Subscription status response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in getSubscriptionStatus:', error);
    console.error('Full URL attempted:', `${API_BASE_URL}/subscription/status?userid=${userId}`);
    if (axios.isAxiosError(error)) {
      console.error('Response status:', error.response?.status);
      console.error('Response data:', error.response?.data);
    }
    throw error;
  }
};

export const createStripeSession = async (data: {
  userId: string;
  successUrl: string;
  cancelUrl: string;
}) => {
  try {
    console.log('Creating Stripe session with data:', data);
    const response = await api.post('/subscription/create-session', {
      userid: data.userId,
      success_url: data.successUrl,
      cancel_url: data.cancelUrl,
    });
    console.log('Stripe session API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in createStripeSession:', error);
    if (axios.isAxiosError(error)) {
      console.error('Response status:', error.response?.status);
      console.error('Response data:', error.response?.data);
    }
    throw error;
  }
};

export const verifyStripePayment = async (data: {
  userId: string;
  sessionId: string;
}) => {
  try {
    const response = await api.post('/subscription/verify-payment', {
      userid: data.userId,
      session_id: data.sessionId,
    });
    return response.data;
  } catch (error) {
    console.error('Error in verifyStripePayment:', error);
    throw error;
  }
};

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
  
  console.log('Flight API Response:', response.data);
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

export const getUserItineraryHistory = async (userId: string) => {
  const response = await api.get(`/itinerary/history?userid=${userId}`);
  return response.data;
};

export const getItineraryById = async (itineraryId: string, userId: string) => {
  const response = await api.get(`/itinerary/${itineraryId}?userid=${userId}`);
  return response.data;
};

export const deleteItinerary = async (itineraryId: string, userId: string) => {
  const response = await api.delete(`/itinerary/${itineraryId}?userid=${userId}`);
  return response.data;
};
