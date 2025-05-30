# David Herbert Portfolio

A creative dual-portfolio website showcasing both my Frontend Development and Technical Writing expertise.

## Features

- Interactive portfolio switching between Developer and Writer profiles
- Smooth animations using Framer Motion
- Responsive design for all device sizes
- Direct URL access to either portfolio type:
  - `/` or `/dev` - Developer portfolio
  - `/writer` - Technical Writer portfolio

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/david-herbert-portfolio.git
cd david-herbert-portfolio
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Build for production:
```
npm run build
```

5. Preview the production build:
```
npm run preview
```

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- React Query
- Wouter (for routing)

## Project Structure

```
/src
  /components          # UI components
    /developer         # Developer portfolio components
    /shared            # Shared components
    /writer            # Writer portfolio components
  /contexts            # React contexts
  /lib                 # Utility functions, types, constants
  /pages               # Page components
  App.tsx              # Main application component
  main.tsx             # Entry point
  index.css            # Global styles
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
