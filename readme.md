# UnifosIT Fullstack Project Setup Guide

## 🚀 How to Start?

### 1. Fork the Repository
First, click on the **Fork** button on GitHub to create a copy of the repository under your account.

---



## Project Setup

### Backend Setup
1. Clone the repository:
```bash
git clone https://github.com/your-username/UnifosIT.git
cd UnifosIT/Backend
```


 
2.  Install the required dependencies:

```bash

npm install
```

3.Create a .env file in the Backend directory with the following content:

```bash

MONGODB_URL=your_mongodb_connection_string

PORT=your_port



```

4. Start the backend server:

```bash

npm start or npm run dev

```


### Frontend Setup

1. Navigate to  Frontend directory:

```bash

cd ../Frontend


```


 
2.  Install the required dependencies:

```bash

npm install
```

3.Create a .env file in the Frontend directory with the following content:

```bash
VITE_BACKEND_URL= your_backend_hosted_url

```

4. Start the frontend server:

```bash

npm run dev

```
