// material-ui
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
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

const LikedTweetsPage = () => (
  <MainCard title="Get people liked tweets">
    <Grid container spacing={10} marginBottom={2}>
      <Grid item xs={5}>
        <Box>
          <Box marginBottom={2}>
            <TextField
              label="Task name"
              defaultValue="Liked tweets"
              fullWidth
            />
          </Box>
          <TextField
            label="Tweets"
            multiline
            minRows={4}
            fullWidth
            style={{ marginBottom: '10px' }}
            inputProps={{ 'data-gramm': 'false' }}
            defaultValue={
              'https://twitter.com/DimaDK24/status/1482721425119191041\nhttps://twitter.com/DimaDK24/status/1483465345345\nhttps://twitter.com/DimaDK24/status/14827214251453534591041'
            }
          />
          <Box style={{ marginBottom: '10px' }}>
            <FormHelperText>
              By default program will take people liked any provided tweet
            </FormHelperText>
            <FormControlLabel
              label="Get people liked all provided tweets"
              control={<Checkbox />}
            />
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

export default LikedTweetsPage
