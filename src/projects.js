import AppYoutube from './Youtube/AppYoutube'
import Videos from './Youtube/pages/Videos'
import Details from './Youtube/pages/Details'
import AppToDoRedux from './TodoWithRedux/AppTodoRedux'
import AppShoppy from './Shoppy/AppShoppy'
import AllProductsShoppy from './Shoppy/pages/AllProductsShoppy'
import NewProductShoppy from './Shoppy/pages/NewProductShoppy'
import ProductDetailShoppy from './Shoppy/pages/ProductDetailShoppy'
import MyCartShoppy from './Shoppy/pages/MyCartShoppy'
import HomeShoppy from './Shoppy/HomeShoppy'
import ProtectedRouteShoppy from './Shoppy/components/ProtectedRouteShoppy'
import AppNetflix from './Netflix/AppNetflix'
import TvNetflix from './Netflix/pages/TvNetflix'
import SearchNetflix from './Netflix/pages/SearchNetflix'
import HomeNetflix from './Netflix/pages/HomeNetflix'
import IndexTrello from './Trello/IndexTrello'

export const projects = [
  { path: 'todo', element: <AppToDoRedux /> },
  { path: 'trello', element: <IndexTrello /> },
  {
    path: 'youtube',
    element: <AppYoutube />,
    children: [
      { index: true, element: <Videos /> },
      { path: ':keyward', element: <Videos /> },
      { path: 'watch/:id', element: <Details /> },
    ],
  },
  {
    path: 'shoppy',
    element: <AppShoppy />,
    children: [
      { index: true, element: <HomeShoppy /> },
      {
        path: 'products/new',
        element: (
          <ProtectedRouteShoppy requireAdmin>
            <NewProductShoppy />
          </ProtectedRouteShoppy>
        ),
      },
      { path: 'products/:id', element: <ProductDetailShoppy /> },
      {
        path: 'carts',
        element: (
          <ProtectedRouteShoppy requireAdmin={false}>
            <MyCartShoppy />
          </ProtectedRouteShoppy>
        ),
      },
      { path: 'products', element: <AllProductsShoppy /> },
    ],
  },
  {
    path: 'netflix',
    element: <AppNetflix />,
    children: [
      { index: true, element: <HomeNetflix /> },
      { path: 'tv', element: <TvNetflix /> },
      { path: 'search', element: <SearchNetflix /> },
    ],
  },
]
