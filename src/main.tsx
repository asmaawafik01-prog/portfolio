import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import Bcare from './pages/work/Bcare'
import Erp from './pages/work/Erp'
import Fooj from './pages/work/Fooj'
import Pos from './pages/work/Pos'
import SelfOrder from './pages/work/SelfOrder'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work/bcare" element={<Bcare />} />
          <Route path="/work/erp" element={<Erp />} />
          <Route path="/work/fooj" element={<Fooj />} />
          <Route path="/work/pos" element={<Pos />} />
          <Route path="/work/self-order" element={<SelfOrder />} />
          <Route path="/work/:slug" element={<ComingSoon title="Case Study" />} />
          <Route
            path="*"
            element={
              <ComingSoon
                title="Page not found"
                eyebrow="404"
                message="That page doesn't exist. It may have moved or the link may be wrong."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
