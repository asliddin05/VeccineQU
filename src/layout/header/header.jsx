import React from "react";
import { Container, Typography, Stack, List, ListItem, ListItemText, Button } from "@mui/material";
import theme from '../../theme/theme';
export const Header = () => {
    return <header style={{paddingBlock: "24px 78px"}}>
        <Container style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Typography style={{fontSize: "24px", fontWeight: "500", cursor: "pointer"}}><span style={{color: theme.palette.primary.orangePrimary}}>Vaccine</span>QU</Typography>
            <Stack style={{display: "flex", gap: "40px"}} direction="row">
                <List style={{display: "flex", gap: "40px"}}>
                    <ListItem disablePadding>
                        <ListItemText style={{color: theme.palette.primary.orangePrimary, fontWeight: "500", cursor: "pointer"}}>Home</ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemText style={{color: theme.palette.primary.blackPrimary, fontWeight: "500", cursor: "pointer"}}>Schedule</ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemText style={{color: theme.palette.primary.blackPrimary, fontWeight: "500", cursor: "pointer"}}>Quote</ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemText style={{color: theme.palette.primary.blackPrimary, fontWeight: "500", cursor: "pointer"}}>Information</ListItemText>
                    </ListItem>
                </List>
                <Button style={{borderRadius: "15px", padding: "10px 28px"}} variant="contained">Call Center</Button>
            </Stack>
        </Container>
    </header>
}