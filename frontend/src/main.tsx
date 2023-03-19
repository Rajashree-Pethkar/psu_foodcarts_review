import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain="dev-lyhq55tlduepysj6.us.auth0.com"
                clientId="6yPZ6k2lOdF7OQ9tLd4HsXv8HRJ7FQEu"
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            >

            <App />
            </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>

)