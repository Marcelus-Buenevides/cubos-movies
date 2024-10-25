import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { defaultTheme, darkTheme } from '../styles/themes';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { GenreProvider } from '../contexts/GenreContext';
import Header from '@/components/Header';
import { FooterContainer } from '@/components/Footer/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GenreProvider>
        <ThemeWrapper>
          <Header/>
          <Component {...pageProps} />
          <FooterContainer/>
        </ThemeWrapper>
      </GenreProvider>
    </ThemeProvider>
  );
}


function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : defaultTheme;

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export default MyApp;
