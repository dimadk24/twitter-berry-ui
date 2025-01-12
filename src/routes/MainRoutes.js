import { lazy } from 'react'

// project imports
import MainLayout from 'layout/MainLayout'
import Loadable from 'ui-component/Loadable'
import GetFollowersPage from '../views/get-followers-page'
import ResultsPage from '../views/results-page'
import LikedTweetsPage from '../views/liked-tweets-page'
import FilterAccountsPage from '../views/filter-accounts-page'

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')))

// utilities routing
const UtilsTypography = Loadable(
  lazy(() => import('views/utilities/Typography'))
)
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')))
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')))
const UtilsMaterialIcons = Loadable(
  lazy(() => import('views/utilities/MaterialIcons'))
)
const UtilsTablerIcons = Loadable(
  lazy(() => import('views/utilities/TablerIcons'))
)

// sample page routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard/default',
      element: <DashboardDefault />,
    },
    {
      path: '/utils/util-typography',
      element: <UtilsTypography />,
    },
    {
      path: '/utils/util-color',
      element: <UtilsColor />,
    },
    {
      path: '/utils/util-shadow',
      element: <UtilsShadow />,
    },
    {
      path: '/icons/tabler-icons',
      element: <UtilsTablerIcons />,
    },
    {
      path: '/icons/material-icons',
      element: <UtilsMaterialIcons />,
    },
    {
      path: '/',
      element: <GetFollowersPage />,
    },
    {
      path: '/results',
      element: <ResultsPage />,
    },
    {
      path: '/liked-tweets',
      element: <LikedTweetsPage />,
    },
    {
      path: '/filter-accounts',
      element: <FilterAccountsPage />,
    },
  ],
}

export default MainRoutes
