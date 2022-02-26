// material-ui
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  TextField,
} from '@mui/material'

// project imports
import MainCard from 'ui-component/cards/MainCard'

// ==============================|| SAMPLE PAGE ||============================== //

const GetFollowers = () => (
  <MainCard title="Get followers">
    <Box style={{ width: '30%' }}>
      <Box marginBottom={2}>
        <TextField label="Task name" defaultValue="Get followers" fullWidth />
      </Box>
      <TextField
        label="Twitter accounts"
        multiline
        minRows={4}
        fullWidth
        style={{ marginBottom: '10px' }}
        inputProps={{ 'data-gramm': 'false' }}
      />
      <Box style={{ marginBottom: '10px' }}>
        <FormHelperText>
          By default program will take people following any provided account
        </FormHelperText>
        <FormControlLabel
          label="Get people following all provided accounts"
          control={<Checkbox />}
        />
      </Box>
      <Button variant="contained" fullWidth>
        Start
      </Button>
    </Box>
  </MainCard>
)

export default GetFollowers
