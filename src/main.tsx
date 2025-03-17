import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './1_app/App'
//TODO  import { Provider } from 'react-redux'
// import { store } from './6_shared/redux/redux-store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
    
  </StrictMode>,
)
