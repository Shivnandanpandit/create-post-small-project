# 📝 Create Post — Full Stack Project

A small full-stack web application that allows users to create and manage posts. Built with a Node.js/Express backend and a vanilla HTML/CSS/JavaScript frontend.

---

## Project Structure

```
create-post-small-project/
├── Backend/        # Node.js + Express REST API
├── Frontend/       # HTML, CSS, and JavaScript UI React
└── .gitignore
```

---

## Features

- Create new posts through a clean UI
- REST API backend to handle post data
- Responsive frontend built with vanilla HTML, CSS, and JavaScript
- Separation of concerns with dedicated Frontend and Backend folders

---

## 🛠️ Tech Stack

| Layer    | Technology                     |
|----------|-------------------------------|
| Frontend | HTML, CSS, JavaScript         |
| Backend  | Node.js, Express.js           |
| Runtime  | Node.js                       |

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

---

### Backend Setup

```bash
# Navigate to the Backend folder
cd Backend

# Install dependencies
npm install

# Start the server
npm start
```

The backend server will start (typically on `http://localhost:3000` or as configured).

---

### Frontend Setup

```bash
# Navigate to the Frontend folder
cd Frontend
```

Open `index.html` directly in your browser, **or** serve it using a local server:

```bash
# Using VS Code Live Server extension, or
npx serve .
```

---

## 📡 API Endpoints

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| GET    | `/posts`     | Fetch all posts    |
| POST   | `/posts`     | Create a new post  |


## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## Author

**Shivnandan Pandit**

- GitHub: [@Shivnandanpandit](https://github.com/Shivnandanpandit)

---

## License

This project is open source and available under the [MIT License](LICENSE).
