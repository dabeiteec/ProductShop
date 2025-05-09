import { Layout } from './providers/layout'
import { BrowserRouter } from 'react-router-dom'

const App:React.FC=()=> {
  return (
  <div>
    <BrowserRouter>
    < Layout/>
    </BrowserRouter>
  </div>
  )
}

export  {App}
