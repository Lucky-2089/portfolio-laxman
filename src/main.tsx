import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BlinkUIProvider, Toaster } from '@blinkdotnew/ui'
import App from './App'
import './index.css'
import ReactGA from "react-ga4";

// Replace with the G-ID you just copied
ReactGA.initialize("G-RXKZS255BV");

// This tracks every time someone opens the page
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BlinkUIProvider theme="glass" darkMode="system">
        <Toaster />
        <App />
      </BlinkUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
