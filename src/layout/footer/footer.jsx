import React from "react";
import { Container, List, ListItem, Typography, Stack, ListItemText, Link} from "@mui/material";
import theme from "../../theme/theme";
export const Footer = () => {
    return <>
    <footer>
        <Container sx={{paddingBlock: "40px 43px"}}>
            <List sx={{display: "flex", justifyContent: "space-between", gap: "90px"}}>
                <ListItem disableGutters alignItems="flex-start"  sx={{display: "flex", flexDirection: "column", gap: "16px", textAlign: "start", maxWidth: "288px"}}>
                <Typography style={{fontSize: "24px", fontWeight: "500", cursor: "pointer"}}>
                    <span style={{color: theme.palette.primary.orangePrimary}}>Vaccine</span>QU
                </Typography>
                <Typography sx={{fontSize: "16px", lineHeight: "32px", color: theme.palette.primary.grey, textAlign: "start"}} paragraph>Combined with a handful of model sentence 
structures,  generate always free from repetition 
injected chunks as necessary.</Typography>
                </ListItem>
                <ListItem disableGutters alignItems="flex-start" sx={{display: "flex", flexDirection: "column", gap: "16px"}}>
                    <Typography  sx={{fontSize: "24px", fontWeight: "500"}}>Menu</Typography>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Home</Link>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Schedule</Link>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Quota</Link>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Information</Link>
                </ListItem>
                <ListItem disableGutters alignItems="flex-start" sx={{display: "flex", flexDirection: "column", gap: "16px"}}>
                    <Typography  sx={{fontSize: "24px", fontWeight: "500"}}>Vaccine Type</Typography>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Sinovac</Link>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Astarzon</Link>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Sinopahm</Link>
                </ListItem>
                <ListItem disableGutters alignItems="flex-start" sx={{display: "flex", flexDirection: "column", gap: "16px"}}>
                    <Typography  sx={{fontSize: "24px", fontWeight: "500"}}>Emergency Contact</Typography>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Whatsap</Link>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Email</Link>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Instagram</Link>
                    <Link href="#" sx={{textDecoration: "none", color: theme.palette.primary.grey}}>Telefon Kantor</Link>
                </ListItem>
            </List>
        </Container>
    </footer>
    </>
}