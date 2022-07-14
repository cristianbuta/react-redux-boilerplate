import { Layout, ErrorBoundary } from '~components'
import GlobalStyle from './global.style'
import { ThemeProvider } from 'styled-components'
import themes from './themes'
import { Provider } from 'react-redux'
import { store } from '~redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes[0]}>
        <GlobalStyle />
        <ErrorBoundary>
          <Layout>
            <BrowserRouter>
              <Routes>
                <Route path={'/'} element={<>default route</>} />;
              </Routes>
            </BrowserRouter>
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  )
}

export default App
