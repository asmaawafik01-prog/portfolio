import { Routes, Route, useLocation, type Location } from 'react-router-dom'
import Layout from './components/Layout'
import CaseModal from './components/CaseModal'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import Bcare from './pages/work/Bcare'
import Erp from './pages/work/Erp'
import Fooj from './pages/work/Fooj'
import Pos from './pages/work/Pos'
import SelfOrder from './pages/work/SelfOrder'

const CASES = [
  { path: '/work/bcare', element: <Bcare /> },
  { path: '/work/erp', element: <Erp /> },
  { path: '/work/fooj', element: <Fooj /> },
  { path: '/work/pos', element: <Pos /> },
  { path: '/work/self-order', element: <SelfOrder /> },
]

/**
 * A case study opened from inside the site carries the page it came from in `state.background`:
 * that page stays mounted and the case study slides up over it. The same URL opened directly
 * (a shared link) has no background and renders as a normal page.
 */
export default function App() {
  const location = useLocation()
  const background = (location.state as { background?: Location } | null)?.background

  return (
    <>
      <Routes location={background ?? location}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {CASES.map((c) => (
            <Route key={c.path} path={c.path} element={c.element} />
          ))}
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
      {background && (
        <CaseModal>
          <Routes>
            {CASES.map((c) => (
              <Route key={c.path} path={c.path} element={c.element} />
            ))}
          </Routes>
        </CaseModal>
      )}
    </>
  )
}
