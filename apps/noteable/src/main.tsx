import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './app/app';
import { createTheme, ThemeProvider } from '@mui/material';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: '#011627',
    },
    secondary: {
      main: '#fb853c',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <App />
      </HashRouter>
    </QueryClientProvider>
  </ThemeProvider>
);
