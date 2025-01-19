# Event App

A React Native application for event registration and credential management. The app allows users to register for events, manage their credentials, and perform check-ins. It also includes a backend API built with Fastify and Prisma for managing event data.

---

## Features

### Mobile Application
- **Register for Events**: Users can sign up for events by providing their name and email.
- **Manage Credentials**: Users can view and share their event credentials.
- **Check-in**: Users can perform check-ins using a code.

### Backend
- **Event Registration**: Handles attendee registration with validation for duplicate entries.
- **Check-in Management**: Prevents duplicate check-ins for attendees.
- **Database Integration**: Uses Prisma ORM for database operations.

---

## Requirements

### Mobile
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo Go App](https://expo.dev/client) installed on your mobile device
- Alternatively, use an Android Virtual Device (via Android Studio) or an iOS simulator (via Xcode).

### Backend
- SQLite database (or other Prisma-supported databases)
- `.env` file with the `DATABASE_URL` configured for your database

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/WilliamElesbao/React-Native-NLW.git
cd React-Native-NLW
```

### Install Dependencies

#### Mobile
```bash
cd mobile
npm install
```

#### Backend
```bash
cd server
npm install
```

---

## Running the Application

### Backend

1. Install dependencies
   ```env
   npm install
   ```

2. Generate Prisma client and apply migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

The backend will be available at `http://localhost:3333`.

---

### Mobile Application

1. Start the mobile project:
   ```bash
   cd mobile
   npx expo start --clear
   ```

2. Open the Expo Dev Tools in your browser. Use one of the following options to run the app:
   - **Expo Go App**: Scan the QR code with your Expo Go app.
   - **Android Virtual Device**: Click "Run on Android device/emulator".
   - **iOS Simulator**: Click "Run on iOS simulator" (Mac only).

> **Note:** The backend server must be running for the app to function properly.

---

## Project Structure

### Mobile (`/mobile`)
- **Components**: Reusable UI components such as buttons, inputs, and headers.
- **Screens**:
  - `Home`: Input a ticket code for check-in.
  - `Register`: Register for an event by providing name and email.
  - `Ticket`: View and share event credentials.
- **Styles**: Contains reusable styles and theme colors.
- **API**: API integration for backend requests.

### Backend (`/server`)
- **Routes**:
  - `/events/:eventId/attendees`: Endpoint for event registration.
  - `/attendees/:attendeeId/check-in`: Endpoint for attendee check-ins.
- **Prisma**:
  - Database schema defined in `prisma/schema.prisma`.
  - Migrations for database updates.
- **Utilities**:
  - Error handling and reusable middlewares.

---

## Scripts

### Mobile
- `npm start`: Starts the Expo development server.
- `npm run android`: Runs the app on an Android emulator.
- `npm run ios`: Runs the app on an iOS simulator (Mac only).
- `npm run web`: Runs the app in a web browser.

### Backend
- `npm run dev`: Starts the Fastify server in development mode.
- `npx prisma generate`: Generates the Prisma client.
- `npx prisma migrate dev`: Applies database migrations.

---

## Dependencies

### Mobile
- `react-native`
- `expo`
- `expo-router`
- `axios`
- `expo-image-picker`
- `@expo/vector-icons`

### Backend
- `fastify`
- `fastify-type-provider-zod`
- `prisma`
- `@prisma/client`
- `zod`

---

## Contribution
Feel free to fork this repository and submit pull requests. All contributions are welcome!

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

