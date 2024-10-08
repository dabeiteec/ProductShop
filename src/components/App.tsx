import {Layout} from './Layout'
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
