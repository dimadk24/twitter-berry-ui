import GroupIcon from '@mui/icons-material/Group'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'get-followers',
      title: 'Get followers',
      type: 'item',
      url: '',
      icon: GroupIcon,
      breadcrumbs: false,
    },
    {
      id: 'get-likers',
      title: 'Liked tweets',
      type: 'item',
      url: '/liked-tweets',
      icon: FavoriteIcon,
      breadcrumbs: false,
    },
    {
      id: 'filter-accounts',
      title: 'Filter accounts',
      type: 'item',
      url: '/filter-accounts',
      icon: FilterAltIcon,
      breadcrumbs: false,
    },
  ],
}

export default other
