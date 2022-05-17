import React from 'react'
import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderLinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export const MuiButton = () => {
    const [formats, setFormats]= useState<String[]>([])
    console.log({
        formats,
    })
    const handleFormatChange=(_event: React.MouseEvent<HTMLElement>, updatedFormats: string[])=>{
        setFormats(updatedFormats)
    }

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

        <Stack direction='row'>
            <ButtonGroup variant='text' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
                <Button>Left</Button>
                <Button>Centered</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} size='small' color='success' orientation='vertical'>
                <ToggleButton value='bold' aria-label='bold'>
                    <FormatBoldIcon/>
                    </ToggleButton>
                <ToggleButton value='italic' aria-label='italic'>
                    <FormatItalicIcon/>
                    </ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'>
                    <FormatUnderLinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
     </Stack>    
  )
} 