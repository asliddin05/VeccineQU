import { Container, Grid,Input, Select, MenuItem, Button, ButtonGroup, Box} from "@mui/material";
import React from "react";

export const Login = () => {
    return <Container disableGutters>
    <Box sx={{padding: "34px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.06)"}}>
        <Grid container columns={3} rowSpacing="32px" columnSpacing={2}>
            <Grid item  sx={{display: "flex", flexDirection: "column"}}>
                <label style={{marginBottom: "14px"}} htmlFor="name">Full name</label>
                <Input placeholder="Enter Your name" sx={{p: "10px", width: "345px", borderRadius: "10px", fontSize: "14px", backgroundColor: "#FAFAFA", border: "1px solid #B9C0C1"}} id="name" inputMode="text" disableUnderline/>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "column"}}>
                <label style={{marginBottom: "14px"}} htmlFor="name">Email or phone number</label>
                <Input placeholder="Enter your email or number" sx={{p: "10px", width: "345px", borderRadius: "10px", fontSize: "14px", backgroundColor: "#FAFAFA", border: "1px solid #B9C0C1"}} id="name" inputMode="email" disableUnderline/>
            </Grid>
            <Grid item  sx={{display: "flex", flexDirection: "column"}}>
                <label style={{marginBottom: "14px"}} htmlFor="name">Address</label>
                <Input placeholder="Full your Address" sx={{p: "10px", width: "345px", borderRadius: "10px", fontSize: "14px", backgroundColor: "#FAFAFA", border: "1px solid #B9C0C1"}} error  id="name" inputMode="text" disableUnderline/>
            </Grid>
            <Grid item  sx={{display: "flex", flexDirection: "column"}}>
                <label style={{marginBottom: "14px"}} htmlFor="name">Disease history</label>
                <Input placeholder="Enter diese history" sx={{p: "10px", width: "345px", borderRadius: "10px", fontSize: "14px", backgroundColor: "#FAFAFA", border: "1px solid #B9C0C1"}} error  id="name" inputMode="text" disableUnderline/>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "column"}}>
                <label style={{marginBottom: "14px"}} htmlFor="name">Level Vaccination</label>
                <Select  sx={{p: "0", width: "345px", borderRadius: "10px", fontSize: "14px", backgroundColor: "#FAFAFA"}}  id="name">
                    <MenuItem  value="easy">Easy</MenuItem>
                    <MenuItem value="noram">Normal</MenuItem>
                    <MenuItem value="Hard">Hard</MenuItem>
                </Select>
            </Grid>
            <Grid item  sx={{display: "flex", flexDirection: "column", mb: "48px"}}>
                <label style={{marginBottom: "14px"}} htmlFor="name">Near Vaccination Location</label>
                <Input placeholder="Indonesia" sx={{p: "10px", width: "345px", borderRadius: "10px", fontSize: "14px", backgroundColor: "#FAFAFA", border: "1px solid #B9C0C1"}} error  id="name" inputMode="text" disableUnderline/>
            </Grid>
</Grid>
        <ButtonGroup sx={{display: "flex", justifyContent: "center"}}>
        <Button variant="contained" sx={{p: "10px 24px", borderRadius: "10px", textTransform: "none", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.06)"}}>
        Vaccine Now
        </Button>
        </ButtonGroup>
        </Box>
        </Container>
}