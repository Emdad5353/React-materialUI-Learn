import React from 'react'
import {Stack, Button, IconButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
   <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="text" href='https://google.com'>Text Button</Button>
            <Button variant="contained">Contained Button</Button>
            <Button variant='outlined'>Outlined Button</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
            <IconButton aria-label='send' color='success' size='small'><SendIcon/></IconButton>
        </Stack>

        <Stack spacing={2} direction='row'>
            <IconButton aria-label='send' color='success' size='small'><SendIcon/></IconButton>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Disabled Elevation</Button>   
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation disableRipple>Disabled Ripple</Button>  
            <Button variant='contained' startIcon={<SendIcon/>} onClick={()=> alert('Clicked')}>Send-OnClick</Button>     
        </Stack>


   </Stack>
  )
}