import React from "react";
import { List, ListItem, ListItemText, Container, Typography, Card, CardHeader, Box, Paper, Button, ButtonGroup} from "@mui/material";
import theme from "../../../theme/theme";
import '../../../fonts/fonts.css'
import { Location } from "../../../assets/icon/location";
import { Date } from "../../../assets/icon/date";
import { Type } from '../../../assets/icon/type'
export const Schedule = () => {
    return <section>
        <Container>
            <List sx={{display: "flex", justifyContent: "center", mb: "80px"}}>
                <ListItem>
                    <ListItemText>
                        <Typography sx={{textAlign: "center", color: theme.palette.primary.grey, fontSize: "32px", fontWeigh: "600"}}>VACCINESIN</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Typography sx={{textAlign: "center", color: theme.palette.primary.grey, fontSize: "32px", fontWeigh: "600"}}>AstraVac</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Typography sx={{textAlign: "center", color: theme.palette.primary.grey, fontSize: "32px", fontWeigh: "600"}}>HealthVaccine</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Typography sx={{textAlign: "center", color: theme.palette.primary.grey, fontSize: "32px", fontWeigh: "600"}}>SimpAcine</Typography>
                    </ListItemText>
                </ListItem>
            </List>
            <Typography sx={{mb: "33px", color: theme.palette.primary.blackPrimary, fontSize: "24px", fontWeight: "500"}} variant="h5">Schedule Vaccination</Typography>
            <Card sx={{p: "24px", mb: "80px", display: "flex", boxShadow: "10px 24px 54px 0px rgba(0, 0, 0, 0.06)"}}>
                <Box sx={{display: "flex", alignItems: "start",mr: "47px"}}>
                <Location />
                <Box sx={{ ml: "16px", mt: "7px"}}>
                <CardHeader sx={{p: 0}} title={<Typography variant="h6" sx={{mb: "14px", fontSize: "16px"}}>Location</Typography>}/>
                <Button sx={{textAlign: "start", color: theme.palette.primary.grey, minWidth: "225px", p: "16px", display: "inline-block", borderRadius: "10px", backgroundColor: "#FAFAFA", textTransform: "none"}}>
                Jakarta, Indonesia
                </Button>
                </Box>
                </Box>
                <Box sx={{display: "flex", alignItems: "start",mr: "47px"}}>
                <Date />
                <Box sx={{ ml: "16px",mt: "7px"}}>
                <CardHeader sx={{p: 0}} title={<Typography variant="h6" sx={{mb: "14px", fontSize: "16px"}}>Location</Typography>}/>
                <Button sx={{textAlign: "start", color: theme.palette.primary.grey, minWidth: "225px", p: "16px", display: "inline-block", borderRadius: "10px", backgroundColor: "#FAFAFA", textTransform: "none"}}>
                25 June, 2021
                </Button>
                </Box>
                </Box>
                <Box sx={{display: "flex", alignItems: "start",mr: "47px"}}>
                <Type />
                <Box sx={{ ml: "16px",mt: "7px"}}>
                <CardHeader sx={{p: 0}} title={<Typography variant="h6" sx={{mb: "14px", fontSize: "16px"}}>Location</Typography>}/>
                <Button sx={{textAlign: "start", color: theme.palette.primary.grey, minWidth: "225px", p: "16px", display: "inline-block", borderRadius: "10px", backgroundColor: "#FAFAFA", textTransform: "none"}}>
                Cinovac
                </Button>
                </Box>
                </Box>
                <ButtonGroup sx={{display: "inline-block", mt: "27px"}}>
                <Button variant="contained" sx={{p: "10px 40px", textTransform: "none", fontWeight: "400", borderRadius: "10px"}}>Find</Button>
                </ButtonGroup>
            </Card>
        </Container>
    </section>
}