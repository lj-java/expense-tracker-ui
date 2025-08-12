# Expense Tracker App

This is a simple expense tracker app built with Next.js and Tailwind CSS.

## Features

- Add expenses
- Display expenses
- Delete expenses
- Calculate total expenses summary

## Getting Started

### Prerequisites

Before running this application, make sure the [expense-tracker-api](https://github.com/lj-java/expense-tracker-api) is running and accessible at the URL specified in the `.env.local` file (`NEXT_PUBLIC_API_BASE_URL`).

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/lj-java/expense-tracker-ui.git
    cd expense-tracker-ui
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    - Copy the `.env.example` file to `.env.local`

      ```bash
      cp .env.example .env.local
      ```

    - Update the `.env.local` file with your API base URL

      ```bash
      NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/expenses
      ```

4. **Run the development server**

    ```bash
    npm run dev
    ```

5. **Open `http://localhost:3001` in your browser**

## Testing

This project uses Jest and React Testing Library for unit testing.

  ```bash
  npm run test
  ```
