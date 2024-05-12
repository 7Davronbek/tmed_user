import {TabPanelProps} from "@/shared";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const CustomTabPanel = (props: TabPanelProps) => {
    const {children, value, index, ...other} = props;

    return (
        <div

            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box  style={{padding: 0}}>
                    <Typography style={{padding: 0, display: 'flex', flexDirection: 'column', gap: '8px'}}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}