import './App.css'
import Listing from './Components/Listing/Listing'
import { itemsAll } from './data/itemsAll'


function App() {

  return (
    <Listing items={itemsAll}/>
  )
}

export default App
