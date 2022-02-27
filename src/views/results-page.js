import MainCard from 'ui-component/cards/MainCard'
import { Box, Button, Grid, Link, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  {
    field: 'account',
    headerName: 'Account',
    width: 120,
    sortable: false,
    renderCell: (row) => (
      <Link href={`https://twitter.com/${row.value}`}>{row.value}</Link>
    ),
  },
  {
    field: 'bio',
    headerName: 'Bio',
    width: 350,
    sortable: false,
    renderCell: (row) => (
      <Box padding={1}>
        {row.value.split('\n').map((stringRow) => (
          <Typography noWrap key={stringRow}>
            {stringRow}
          </Typography>
        ))}
      </Box>
    ),
  },
  {
    field: 'following',
    headerName: 'Following',
    width: 100,
    sortable: false,
  },
  {
    field: 'followers',
    headerName: 'Followers',
    width: 100,
    sortable: false,
  },
]

const rows = [
  {
    id: 1,
    account: 'dimadk24',
    bio:
      '🕸️ Senior JavaScript/Python web developer\n' +
      '✨ JavaScript mentor in @rollingscopes\n' +
      '🎯 Building in public',
    following: 150,
    followers: 45,
  },
  {
    id: 2,
    account: 'tdinh_me',
    bio:
      'Indie Developer. Quit my job to build software\n' +
      '\n' +
      '🧰 Developer Tools: @devutils_app\n' +
      '\n' +
      '✨ Twitter Magic: @blackmagic_so',
    following: 695,
    followers: 31300,
  },
]

const ResultsPage = () => (
  <MainCard title='Results for "<task name>" task'>
    <Box style={{ height: 400 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="subtitle1">Twitter accounts</Typography>
        </Grid>
        <Grid item>
          <Button style={{ textTransform: 'none' }} variant="text">
            Export in .csv
          </Button>
        </Grid>
      </Grid>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        disableColumnMenu
        rowHeight={80}
      />
    </Box>
  </MainCard>
)

export default ResultsPage
