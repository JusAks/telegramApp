import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import {BrowserRouter} from "react-router-dom";

const link = 'https://t.me/AksTestMiniAppReact_bot/play'
//const link = 'https://t.me/testWebAppAks_bot/start'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TonConnectUIProvider
          manifestUrl="https://justaks1.netlify.app/tonconnect-manifest.json"
          actionsConfiguration={{
              twaReturnUrl: link
          }}
      >
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </TonConnectUIProvider>
  </React.StrictMode>,
)
