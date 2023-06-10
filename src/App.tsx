import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Shopify } from "./pages/Shopify"
import { Sale } from "./pages/Sale"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import './styles.css';
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
