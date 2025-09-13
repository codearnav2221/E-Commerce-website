import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials).then(res => res.data),
  
  register: (userData: { name: string; email: string; password: string }) =>
    api.post('/auth/register', userData).then(res => res.data),
  
  getCurrentUser: () =>
    api.get('/auth/me').then(res => res.data),
  
  updateProfile: (userData: any) =>
    api.put('/auth/profile', userData).then(res => res.data),
  
  updatePassword: (passwordData: { currentPassword: string; newPassword: string }) =>
    api.put('/auth/password', passwordData).then(res => res.data),
};

// Product API
export const productAPI = {
  getProducts: (params: any = {}) =>
    api.get('/products', { params }).then(res => res.data),
  
  getProductById: (id: string) =>
    api.get(`/products/${id}`).then(res => res.data),
  
  getFeaturedProducts: () =>
    api.get('/products/featured').then(res => res.data),
  
  getCategories: () =>
    api.get('/products/categories').then(res => res.data),
  
  addReview: (productId: string, review: { rating: number; comment?: string }) =>
    api.post(`/products/${productId}/reviews`, review).then(res => res.data),
};

// Order API
export const orderAPI = {
  createOrder: (orderData: any) =>
    api.post('/orders', orderData).then(res => res.data),
  
  getOrders: (params: any = {}) =>
    api.get('/orders', { params }).then(res => res.data),
  
  getOrderById: (id: string) =>
    api.get(`/orders/${id}`).then(res => res.data),
  
  updateOrderPayment: (orderId: string, paymentResult: any) =>
    api.put(`/orders/${orderId}/pay`, { paymentResult }).then(res => res.data),
  
  cancelOrder: (orderId: string, reason?: string) =>
    api.put(`/orders/${orderId}/cancel`, { reason }).then(res => res.data),
};

// Payment API
export const paymentAPI = {
  createPaymentIntent: (amount: number, currency = 'usd', metadata = {}) =>
    api.post('/payments/create-payment-intent', { amount, currency, metadata }).then(res => res.data),
  
  getConfig: () =>
    api.get('/payments/config').then(res => res.data),
};

// Admin API
export const adminAPI = {
  getStats: () =>
    api.get('/admin/stats').then(res => res.data),
  
  getOrders: (params: any = {}) =>
    api.get('/admin/orders', { params }).then(res => res.data),
  
  updateOrderStatus: (orderId: string, status: string, trackingNumber?: string) =>
    api.put(`/admin/orders/${orderId}/status`, { status, trackingNumber }).then(res => res.data),
  
  getUsers: (params: any = {}) =>
    api.get('/admin/users', { params }).then(res => res.data),
  
  updateUserRole: (userId: string, role: string) =>
    api.put(`/admin/users/${userId}/role`, { role }).then(res => res.data),
  
  getProducts: (params: any = {}) =>
    api.get('/admin/products', { params }).then(res => res.data),
  
  createProduct: (productData: any) =>
    api.post('/products', productData).then(res => res.data),
  
  updateProduct: (productId: string, productData: any) =>
    api.put(`/products/${productId}`, productData).then(res => res.data),
  
  deleteProduct: (productId: string) =>
    api.delete(`/products/${productId}`).then(res => res.data),
};

export default api;
