import { ThemeProvider } from "styled-components";
import { theme } from './styles/theme/default';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <h1>Hello World!</h1>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
