import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const signin=()=>{
    return (
        <div>
          
            <form action="">
                <Box sx={{
        borderColor: 'secondary.main',
        border:2,
        backgroundColor:'ffff',
       
        
      }}
                display="flex"
                flexDirection={"column"}
                maxWidth={400}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={6}
                boxShadow={"10px 20px 30px #9c27b0 "}
                
                >
                  <Typography variant='h3' color="black" padding={3} textAlign={"center"} margin='normal' >Login</Typography>
                  <TextField id="standard-basic" label="Name" variant="standard" type='text' margin='normal' color='secondary'  ></TextField>
                  <TextField id="standard-basic" label="Email" variant="standard" type='text' margin='normal' color='secondary'  ></TextField>
                  <TextField id="standard-basic" label="Password" variant="standard" type='text' margin='normal' color='secondary' ></TextField>

                  <Button  sx={{ marginTop:4, borderRadius:2}}variant="contained" color="secondary"  >Login</Button>
                </Box>
            </form>
        </div>
    )
}
export default signin; 
