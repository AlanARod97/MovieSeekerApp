import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function NavListDrawer({navLinks}) {
    return (
        <Box sx={{ width: 300 }}>
            <nav>
                <List>
                    {
                        navLinks.map(item => (
                            <ListItem disablePadding key={item.title}>

                                
                                <ListItemButton
                                    component="a"
                                    href={item.path}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText >{item.title}</ListItemText>
                                    
                                </ListItemButton>
                            </ListItem>
                        ))
                    }


                </List>
            </nav>

        </Box>
    )
}