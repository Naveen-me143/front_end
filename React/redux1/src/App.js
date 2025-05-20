import './App.css'
import ProductList from './Components/ProductList'
import UsersList from './components/UsersList'

const App = () => {
  return (

    <div>
          <div>Fetch Example using redux toolkit</div>
          <UsersList/>
          <hr />
          <ProductList/>

    </div>
  )
}

export default App