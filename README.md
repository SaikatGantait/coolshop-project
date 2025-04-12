Sure! Here's a **README.md** for your full-stack `coolshop` project. You can copy and paste it into a new `README.md` file in your project root.

---

# CoolShop Full-Stack Application

Welcome to the CoolShop project! This is a full-stack application built with a **Spring Boot** backend and **React** frontend. It's a simple e-commerce platform with user authentication and protected routes.

## 🛠️ Technologies Used

- **Backend**:
  - Java
  - Spring Boot (with JWT Authentication)
  
- **Frontend**:
  - React.js
  - Tailwind CSS (for styling)
  - Framer Motion (for animations)
  - Sonner (for notifications)

---

## 🚀 Features

- **User Authentication**: Login and Registration with JWT token handling.
- **Product Page**: Display products fetched from the backend.
- **Protected Routes**: Admin route protection using JWT.
- **Animations**: Framer Motion used for smooth page transitions.
- **Theming**: Tailwind CSS for responsive and clean design.

---

## 💻 Project Setup

### 1. **Backend Setup (Spring Boot)**

#### Clone the backend:

```bash
cd coolshop-backend
```

#### Install Dependencies:

```bash
./mvnw clean install  # For Maven users
# or
./gradlew build  # For Gradle users
```

#### Run the Backend:

```bash
./mvnw spring-boot:run  # For Maven users
# or
./gradlew bootRun  # For Gradle users
```

The backend will run at [http://localhost:8080](http://localhost:8080).

---

### 2. **Frontend Setup (React)**

#### Clone the frontend:

```bash
cd coolshop-frontend
```

#### Install Dependencies:

```bash
npm install
```

#### Run the Frontend:

```bash
npm start
```

The frontend will run at [http://localhost:3000](http://localhost:3000).

---

## 🔐 Authentication

- **Login**: Enter your credentials to get a JWT token.
- **Protected Routes**: Access to `/products` and `/admin` is restricted to authenticated users. JWT tokens are stored in the client and sent with every request to the backend.

---

## 🔄 Common Commands

- **Start Backend**:
  ```bash
  ./mvnw spring-boot:run  # For Maven
  ```

- **Start Frontend**:
  ```bash
  npm start  # For React
  ```

- **Build Backend**:
  ```bash
  ./mvnw clean install  # For Maven
  ```

- **Build Frontend**:
  ```bash
  npm run build  # For React
  ```

---

## 📂 File Structure

- **Backend**: `coolshop-backend/`
  - `src/main/java/com/coolshop/` – Backend logic
  - `src/main/resources/` – Configuration files

- **Frontend**: `coolshop-frontend/`
  - `src/` – React components and pages
  - `public/` – Static files (like `index.html`)

---

## 📝 Future Improvements

- **Admin Panel**: Ability for administrators to manage products, users, and orders.
- **Payment Integration**: Integration with a payment gateway (like Stripe or PayPal).
- **Search Functionality**: Allow users to search and filter products.
- **Better Error Handling**: Improve error handling in both frontend and backend.

---

 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes and commit them (`git commit -am 'Add new feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Create a pull request

---

 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Let me know if you'd like to add or change anything!
