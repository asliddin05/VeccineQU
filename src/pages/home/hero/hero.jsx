import React from "react";
import { Container, Typography, ButtonGroup, Button, Box, Card, CardHeader, Avatar, CardContent } from "@mui/material";
import theme from '../../../theme/theme';
import { Dots } from "../../../assets/icon/dots";
export const Hero = () => {
    return <section style={{paddingBottom: "80px"}}>
        <Container sx={{mb: "41px"}} style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div style={{maxWidth: "410px"}}>
            <Typography mb="16px" style={{fontSize: "48px", lineHeight: "64px", fontWeight: "500", color: theme.palette.primary.blackPrimary}} variant="h2">Get Your Vaccine, Get Your Health</Typography>
            <Typography mb="32px" paragraph style={{color: theme.palette.primary.grey, fontSize: "14px", lineHeight: "32px"}}>There are many variations of passages of Lorem Ipsum available, 
but the majority have suffered alteration in some form, 
by injected humour</Typography>
            <ButtonGroup>
                <Button style={{marginRight: "16px", borderRadius: "10px", padding: "10px 22px", textTransform: "none"}} variant="contained">Get Your Vaccine</Button>
                <Button style={{borderRadius: "10px", padding: "10px 28px", textTransform: "none"}}variant="outlined">Learn more</Button>
            </ButtonGroup>
            </div>
            <Box  display="grid" gridTemplateColumns="180px 180px 180px" gridTemplateRows="184px 184px" gap="22px">
                <Box style={{backgroundColor: theme.palette.primary.pink, borderRadius: "10px"}} >  <img style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}} src="https://images.unsplash.com/photo-1542089363-bba089ffaa25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </Box> 
                <Box style={{backgroundColor: theme.palette.primary.pink, borderRadius: "10px"}}  >  <img style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}} src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </Box>
                <Box style={{backgroundColor: theme.palette.primary.pink, borderRadius: "10px"}} gridRow="1/3" gridColumn="3/4">
                    <img style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}} src="https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
                </Box>
                <Box style={{backgroundColor: theme.palette.primary.pink, borderRadius: "10px"}} >  <img style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}} src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" />
                </Box>
                <Box style={{backgroundColor: theme.palette.primary.pink, borderRadius: "10px"}}  >  <img style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}} src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" />
                </Box>
            </Box>
        </Container>
        <Container sx={{display: "flex", justifyContent: "space-between"}}>
            <div>
            <Card sx={{padding: "24px 33px 30px 33px", display: "inline-block", backgroundColor: "#fff", borderRadius: "15px", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.1)", marginRight: "16px"}}>
        <CardHeader sx={{padding: "0px"}}
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            S
          </Avatar>
        } title={
            <Typography variant="h5" sx={{fontSize: "18px", fontWeight: "500"}}>Sinovac</Typography>
        }
        subheader={
            <Typography paragraph sx={{fontSize: "12px", marginBottom: "0px"}}>Necessary making 
            this</Typography>
        }
      />
      <ButtonGroup sx={{display: "flex", justifyContent: "center", mt: "28px"}}>
      <Button sx={{ borderRadius: "30px", p: "12px 24px"}} variant="outlined">
      Get Vaccine
      </Button>
      </ButtonGroup>
            </Card>
            <Card sx={{padding: "24px 33px 30px 33px", display: "inline-block", backgroundColor: "#fff", borderRadius: "15px", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.1)", marginRight: "16px"}}>
        <CardHeader sx={{padding: "0px"}}
        avatar={
          <Avatar sx={{ bgcolor: "red" }}>
            A
          </Avatar>
        } title={
            <Typography sx={{fontSize: "18px", fontWeight: "500"}} variant="h5">Astrazeneca</Typography>
        }
        subheader={
            <Typography paragraph sx={{fontSize: "12px", marginBottom: "0px"}}>Necessary making 
            this</Typography>
        }
      />
            </Card>
            <Card sx={{padding: "24px 33px 30px 33px", display: "inline-block", backgroundColor: "#fff", borderRadius: "15px", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.1)"}}>
        <CardHeader sx={{padding: "0px"}}
        avatar={
          <Avatar sx={{ bgcolor: "red" }}>
            S
          </Avatar>
        } title={
            <Typography sx={{fontSize: "18px", fontWeight: "500"}} variant="h5">Sinopahrm</Typography>
        }
        subheader={
            <Typography paragraph sx={{fontSize: "12px", marginBottom: "0px"}}>Necessary making 
            this</Typography>
        }
      />
            </Card>
            </div>
            <div style={{display: "flex", alignItems: "end" }}>
            <Dots style={{marginBottom: "90px"}}/>
            </div>
        </Container>
    </section>
}