import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
);
