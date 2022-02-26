// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons'

import GroupIcon from '@mui/icons-material/Group'
// constant
const icons = { IconBrandChrome, IconHelp }

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'get-followers',
      title: 'Get followers',
      type: 'item',
      url: '/get-followers',
      icon: GroupIcon,
      breadcrumbs: false,
    },
  ],
}

export default other
