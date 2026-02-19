# Mobile App Setup

## Authentication Flow

1. **Splash Screen** - Shows on app launch with welcome animation
2. **Login Screen** - OTP-based authentication (phone number)
3. **Main App** - Protected routes after authentication

## Features

- ✅ Splash screen with smooth animations
- ✅ OTP-based login (phone number)
- ✅ Secure token storage using Expo SecureStore
- ✅ Auth context for state management
- ✅ Protected routes with automatic navigation
- ✅ Token refresh handling

## Environment Variables

Create a `.env` file in `apps/mobile/`:

```env
EXPO_PUBLIC_API_URL=http://localhost:3001
```

For iOS Simulator, use:
```env
EXPO_PUBLIC_API_URL=http://localhost:3001
```

For Android Emulator, use:
```env
EXPO_PUBLIC_API_URL=http://10.0.2.2:3001
```

For physical device, use your computer's IP:
```env
EXPO_PUBLIC_API_URL=http://192.168.1.XXX:3001
```

## Running the App

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm --filter mobile start

# Run on iOS
pnpm --filter mobile ios

# Run on Android
pnpm --filter mobile android
```

## Customizing Splash Screen

The splash screen design can be customized in `app/splash.tsx`. You can:
- Replace the logo with your own image
- Change colors and styling
- Adjust animation timing
- Add your branding elements

## Customizing Login Screen

The login screen can be customized in `app/login.tsx`. You can:
- Update colors and styling to match your brand
- Add email option alongside phone
- Customize OTP input appearance
- Add additional validation
