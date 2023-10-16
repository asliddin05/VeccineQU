import { Container, Grid, Typography, Box } from "@mui/material";
import theme from "../../../theme/theme";
import React from "react";
import { Attention } from '../../../assets/icon/attention'
import { User } from '../../../assets/icon/user'
import { System } from "../../../assets/icon/system";
import { UserGroup } from "../../../assets/icon/user-group"
export const Veccine = () => {
    return <section>
        <Container sx={{mb: "80px"}}>
            <div style={{maxWidth: "495px"}}>
        <Typography variant="h5" sx={{fontWeight: "500", fontSize: "24px", mb: "24px"}}>
        Why Vaccine Is Important?
        </Typography>
        <Typography paragraph sx={{color:theme.palette.primary.grey, lineHeight: "40px"}}>Combined with a handful of model sentence structures, to generate 
always free from repetition injected.</Typography>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={4}>
                    <Grid item xs={1} sx={{p: "26px"}}>
                        <Box sx={{mb: "16px", borderRadius:"10px", backgroundColor: theme.palette.primary.pink, p: "8px", display: "inline-block", width: "40px", height: "40px"}}>
                            <Attention />
                        </Box>
                        <Typography sx={{fontSize: "18px", mb: "16px"}}>Prevent covid 19 virus</Typography>
                        <Typography paragraph sx={{fontSize: "14px", lineHeight: "24px", color: theme.palette.primary.grey}}>Model sentence structures, 
to generate Lorem which looks 
reasonable</Typography>
                    </Grid>
                    <Grid item xs={1} sx={{p: "26px"}}>
                        <Box sx={{mb: "16px", borderRadius:"10px", backgroundColor: theme.palette.primary.pink, p: "8px", display: "inline-block", width: "40px", height: "40px"}}>
                            <User />
                        </Box>
                        <Typography sx={{fontSize: "18px", mb: "16px"}}>Protect others</Typography>
                        <Typography paragraph sx={{fontSize: "14px", lineHeight: "24px", color: theme.palette.primary.grey}}>Model sentence structures, 
to generate Lorem which looks 
reasonable</Typography>
                    </Grid>
                    <Grid item xs={1} sx={{p: "26px"}}>
                        <Box sx={{mb: "16px", borderRadius:"10px", backgroundColor: theme.palette.primary.pink, p: "8px", display: "inline-block", width: "40px", height: "40px"}}>
                            <System />
                        </Box>
                        <Typography sx={{fontSize: "18px", mb: "16px"}}>Stop the spread of covid 19</Typography>
                        <Typography paragraph sx={{fontSize: "14px", lineHeight: "24px", color: theme.palette.primary.grey}}>Model sentence structures, 
to generate Lorem which looks 
reasonable</Typography>
                    </Grid>
                    <Grid item xs={1} sx={{p: "26px"}}>
                        <Box sx={{mb: "16px", borderRadius:"10px", backgroundColor: theme.palette.primary.pink, p: "8px", display: "inline-block", width: "40px", height: "40px"}}>
                            <UserGroup />
                        </Box>
                        <Typography sx={{fontSize: "18px", mb: "16px"}}>Protect the next generation</Typography>
                        <Typography paragraph sx={{fontSize: "14px", lineHeight: "24px", color: theme.palette.primary.grey}}>Model sentence structures, 
to generate Lorem which looks 
reasonable</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </section>
}