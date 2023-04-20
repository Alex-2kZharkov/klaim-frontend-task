import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './features/App';
import { UserProvider } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
);
