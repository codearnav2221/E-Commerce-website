# E-Commerce Platform

A full-stack e-commerce solution built with React, Node.js, and MongoDB. This platform provides a complete online shopping experience with user authentication, product management, payment processing, and an admin dashboard.

## Features

### 🛍️ Customer Features
- **Product Catalog**: Browse and search products with advanced filtering
- **User Authentication**: Secure registration and login system
- **Shopping Cart**: Add/remove items with quantity management
- **Checkout Process**: Secure payment processing with Stripe
- **Order Management**: Track order status and history
- **Product Reviews**: Rate and review products
- **Responsive Design**: Mobile-first, modern UI

### 👨‍💼 Admin Features
- **Dashboard**: Analytics and overview of sales, orders, and users
- **Product Management**: Create, update, and delete products
- **Order Management**: Process orders and update status
- **User Management**: View and manage user accounts
- **Inventory Tracking**: Monitor stock levels

### 🔧 Technical Features
- **JWT Authentication**: Secure token-based authentication
- **Payment Integration**: Stripe payment processing
- **Image Upload**: Product image management
- **Search & Filtering**: Advanced product search capabilities
- **Responsive Design**: Works on all devices
- **Real-time Updates**: Live cart and order updates

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Stripe** - Payment processing
- **Multer** - File upload handling
- **Bcrypt** - Password hashing

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Stripe Account** (for payment processing)

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd E-commerce
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```
### 3. Environment Setup

#### Backend Environment Variables
Create a `.env` file in the `server` directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
CLIENT_URL=http://localhost:3000
```

#### Frontend Environment Variables
Create a `.env` file in the `client` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

### 4. Database Setup
Make sure MongoDB is running on your system. The application will automatically create the necessary collections when you start the server.

### 5. Run the Application

#### Development Mode (Recommended)
```bash
# From the root directory
npm run dev
```

This will start both the backend server (port 5000) and frontend development server (port 3000) concurrently.

#### Manual Start
```bash
# Start backend server
cd server
npm run dev

# Start frontend (in a new terminal)
cd client
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/password` - Update password

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `GET /api/products/featured` - Get featured products
- `GET /api/products/categories` - Get product categories
- `POST /api/products/:id/reviews` - Add product review

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/pay` - Update order payment
- `PUT /api/orders/:id/cancel` - Cancel order

### Payments
- `POST /api/payments/create-payment-intent` - Create Stripe payment intent
- `GET /api/payments/config` - Get Stripe configuration

### Admin
- `GET /api/admin/stats` - Get dashboard statistics
- `GET /api/admin/orders` - Get all orders (admin)
- `PUT /api/admin/orders/:id/status` - Update order status
- `GET /api/admin/users` - Get all users (admin)
- `PUT /api/admin/users/:id/role` - Update user role
- `GET /api/admin/products` - Get all products (admin)
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

## Project Structure

```
E-commerce/
├── server/                 # Backend application
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── index.js          # Server entry point
│   └── package.json      # Backend dependencies
├── client/                # Frontend application
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── store/        # Redux store
│   │   ├── services/     # API services
│   │   ├── hooks/        # Custom hooks
│   │   └── App.tsx       # Main app component
│   └── package.json      # Frontend dependencies
├── package.json          # Root package.json
└── README.md            # This file
```

## Usage

### Creating an Admin User
To create an admin user, you can either:

1. **Use MongoDB directly**:
   ```javascript
   // Connect to your MongoDB and run:
   db.users.updateOne(
     { email: "admin@example.com" },
     { $set: { role: "admin" } }
   )
   ```

2. **Modify the registration endpoint** temporarily to create admin users

### Adding Products
Admin users can add products through the admin dashboard or by making API calls to the products endpoint.

### Payment Processing
The application uses Stripe for payment processing. Make sure to:
1. Set up a Stripe account
2. Get your API keys from the Stripe dashboard
3. Add the keys to your environment variables
4. Test with Stripe's test card numbers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Contact the development team

## Roadmap

- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Mobile app
- [ ] Advanced search with Elasticsearch
- [ ] Inventory management
- [ ] Coupon system
- [ ] Wishlist functionality
- [ ] Social login integration
- [ ] Advanced admin reporting

---

**Happy Shopping! 🛒**
