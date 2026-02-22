import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage/HomePage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import ProductPage from './Pages/ProductPage/ProductPage'
import CartPage from './Pages/CartPage/CartPage'
import HistoryPage from './Pages/HistoryPage/HistoryPage'
import QuestionPage from './Pages/QuestionsPage/QuestionPage'
import OpinionsPage from './Pages/OpinionsPage/OpinionsPage'
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage'
import SalePage from './Pages/SalePage/SalePage'
import BuyPage from './Pages/BuyPage/BuyPage'
import EditInfoPage from './Pages/EditInfoPage/EditInfoPage'
import SearchPage from './Pages/SearchPage/SearchPage'

function App() {
  /* TODO: en muhcas de las rutas, voy a tener que agregar alguna id (estilo /product/:id) */

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} /> {/* TODO: cambiar a /search/:query */}
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/opinions" element={<OpinionsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/edit_info" element={<EditInfoPage />} />
      </Routes>
    </>
  )
}

export default App
