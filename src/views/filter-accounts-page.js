// material-ui
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'

// project imports
import MainCard from 'ui-component/cards/MainCard'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'

const formatDate = (date) => {
  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }
  return new Date(date).toLocaleDateString([], options)
}

const columns = [
  {
    field: 'datetime',
    headerName: 'Date & time',
    width: 150,
    sortable: false,
    renderCell: (row) => formatDate(row.value),
  },
  {
    field: 'taskName',
    headerName: 'Task name',
    width: 250,
    sortable: false,
  },
  {
    field: 'number',
    headerName: 'Number of results',
    width: 150,
    sortable: false,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 120,
    renderCell: () => (
      <Button component={Link} to="/results">
        View details
      </Button>
    ),
  },
]

const rows = [
  {
    id: 1,
    datetime: Date.now(),
    taskName: 'Liked 3 competitors giveaways',
    number: 9571,
  },
  {
    id: 2,
    datetime: new Date().setHours(10),
    taskName: 'Liked competitors pins',
    number: 3212,
  },
]

const FilterAccountsPage = () => (
  <MainCard title="Filter accounts">
    <Grid container spacing={10} marginBottom={2}>
      <Grid item xs={5}>
        <Box>
          <Box marginBottom={2}>
            <TextField label="Task name" defaultValue="Filter" fullWidth />
          </Box>
          <TextField
            label="Accounts"
            multiline
            minRows={4}
            fullWidth
            style={{ marginBottom: '10px' }}
            inputProps={{ 'data-gramm': 'false' }}
            defaultValue={
              'https://twitter.com/dimadk24\nhttps://twitter.com/tdinh_me\nhttps://twitter.com/levelsio'
            }
          />
          <Typography marginBottom={1}>
            Or use accounts from a previous task
          </Typography>
          <Box marginBottom={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Previous task
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Previous task"
              >
                <MenuItem value={1}>Following 5 competitors</MenuItem>
                <MenuItem value={2}>Following 2 marketing blogs</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="body1" marginBottom={2}>
              Filtering criteria
            </Typography>
            <TextField
              label="Bio keywords"
              multiline
              minRows={4}
              fullWidth
              style={{ marginBottom: '10px' }}
              inputProps={{ 'data-gramm': 'false' }}
              defaultValue={'build in public\nSaaS\nstartup'}
            />
            <Box marginBottom={2} marginTop={1}>
              <TextField
                label="Min number of followers"
                defaultValue="200"
                style={{ marginRight: '16px' }}
              />
              <TextField label="Max number of followers" defaultValue="50000" />
            </Box>
          </Box>
          <Button variant="contained" fullWidth>
            Start
          </Button>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box style={{ height: 400 }}>
          <Typography variant="subtitle1">Results</Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            disableColumnMenu
          />
        </Box>
      </Grid>
    </Grid>
  </MainCard>
)

export default FilterAccountsPage
