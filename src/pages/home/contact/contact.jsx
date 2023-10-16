import React from "react";
import { Container, Box, Stack, Typography, Grid, Button } from "@mui/material";
import theme from "../../../theme/theme";
import { Phone } from '../../../assets/icon/phone'
import { Mail } from '../../../assets/icon/mail'
import { Call } from '../../../assets/icon/call'
import { NearLocation } from '../../../assets/icon/near-location'

export const Contact = () => {
    return <section style={{marginBottom: "80px"}}>
        <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "70px" }}>
            <Box sx={{Width: "514px", height: "400px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12045.966743097046!2d-74.32261329218507!3d40.992610237859594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c304a9e0a86d53%3A0xdaa9039d11d40670!2z0KDQuNCy0LXRgNC00LXQudC7LCDQndGM0Y4t0JTQttC10YDRgdC4LCDQodCo0JA!5e0!3m2!1sru!2s!4v1697462227314!5m2!1sru!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Box>
            <Stack>
                <Typography sx={{ fontSize: "24px", mb: "31px", fontWeight: "500" }} variant="h5">Emergency Contact</Typography>
                <Typography paragraph sx={{ lineHeight: "32px", mb: "32px", color: theme.palette.primary.grey }}>Combined with a handful of model sentence structures,  generate
                    always free from repetition injected.</Typography>
                <Grid container sx={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px"}} >
                    <Grid item sx={{width: "245px", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.08)",borderRadius: "10px", display: "flex", gap: "16px", p: "26px 32px 17px 24px"}}>
                        <Box sx={{ minWidth: "40px", height: "40px", borderRadius: "10px", backgroundColor: theme.palette.primary.pink, p: "8px" }}>
                            <Phone />
                        </Box>
                        <Box sx={{width: "100%"}}>
                            <Typography variant="h5" sx={{fontSize: "16px", fontWeight: "500"}}>Call</Typography>
                            <Typography paragraph sx={{color: theme.palette.primary.grey, fontSize: "16px"}}>Type fast chat</Typography>
                            <Button variant="contained" sx={{width: "100%", borderRadius: "10px", textTransform: "none", fontSize: "14px"}}>
                            Call Now
                         </Button>
                        </Box>
                    </Grid>
                    <Grid item sx={{width: "245px", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.08)",borderRadius: "10px", display: "flex", gap: "16px", p: "26px 32px 17px 24px"}}>
                        <Box sx={{ minWidth: "40px", height: "40px", borderRadius: "10px", backgroundColor: theme.palette.primary.pink, p: "8px" }}>
                            <Call />
                        </Box>
                        <Box sx={{width: "100%"}}>
                            <Typography variant="h5" sx={{fontSize: "16px", fontWeight: "500"}}>Chat</Typography>
                            <Typography paragraph sx={{color: theme.palette.primary.grey, fontSize: "16px"}}>Type fast chat</Typography>
                            <Button variant="contained" sx={{width: "100%", borderRadius: "10px", textTransform: "none", fontSize: "14px"}}>
                            Call Now
                         </Button>
                        </Box>
                    </Grid>
                    <Grid item sx={{width: "245px", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.08)",borderRadius: "10px", display: "flex", gap: "16px", p: "26px 32px 17px 24px"}}>
                        <Box sx={{ minWidth: "40px", height: "40px", borderRadius: "10px", backgroundColor: theme.palette.primary.pink, p: "8px" }}>
                            <NearLocation />
                        </Box>
                        <Box sx={{width: "100%"}}>
                            <Typography variant="h5" sx={{fontSize: "16px", fontWeight: "500"}}>Video Call</Typography>
                            <Typography paragraph sx={{color: theme.palette.primary.grey, fontSize: "16px"}}>Press the button</Typography>
                            <Button variant="contained" sx={{width: "100%", borderRadius: "10px", textTransform: "none", fontSize: "14px"}}>
                            Video Call
                         </Button>
                        </Box>
                    </Grid>
                    <Grid item sx={{width: "245px", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.08)",borderRadius: "10px", display: "flex", gap: "16px", p: "26px 32px 17px 24px"}}>
                        <Box sx={{ minWidth: "40px", height: "40px", borderRadius: "10px", backgroundColor: theme.palette.primary.pink, p: "8px" }}>
                            <Mail />
                        </Box>
                        <Box sx={{width: "100%"}}>
                            <Typography variant="h5" sx={{fontSize: "16px", fontWeight: "500"}}>Email</Typography>
                            <Typography paragraph sx={{color: theme.palette.primary.grey, fontSize: "16px"}}>Just uptade</Typography>
                            <Button variant="contained" sx={{width: "100%", borderRadius: "10px", textTransform: "none", fontSize: "14px"}}>
                            Send Email
                         </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    </section>
}