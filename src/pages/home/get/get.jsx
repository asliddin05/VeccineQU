import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import theme from '../../../theme/theme'
import { Login } from "./login/login";
export const Get = () => {
    return <section style={{marginBottom: "80px"}}>
        <Container>
            <Box sx={{maxWidth: "480px", mb: "33px"}}>
                <Typography sx={{fontSize: "24px", fontWeight: "500", mb: "16px"}}>Get Vaccine Now</Typography>
                <Typography paragraph sx={{lineHeight: "32px", color: theme.palette.primary.grey}}>
                Combined with a handful of model sentence structures,  generate 
always free from repetition injected.
                </Typography>
            </Box>
            <Login />
        </Container>
    </section>
}