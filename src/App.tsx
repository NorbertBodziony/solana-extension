import * as React from 'react'
import { Provider } from 'react-redux'
import { StylesProvider, ThemeProvider } from '@material-ui/core'
import { theme } from '@static/theme'
import { store } from './store'
import { persistStore } from 'redux-persist'
import { runSagas } from './store/index'
import { SnackbarProvider } from 'notistack'

import Notifier from '@containers/Notifier/Notifier'
import Root from './pages/Root/Root'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <SnackbarProvider maxSnack={99}>
              <Root />
              <Notifier />
            </SnackbarProvider>
          </StylesProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
runSagas()
export default App
