import { Typography, Box} from '@mui/material';

function HWSet(props) {
    return (
        <div>
            {/* Box component from MUI is used to wrap the content and apply styles */}
            <Box className="project-header" sx={{ marginBottom: 2 }}>
                {/* Typography for the hardware set name */}
                <Typography variant="body1">
                {props.hwset} 
                </Typography>
                {/* Typography for the hardware set capacity */}
                <Typography variant="body2" sx={{ marginRight: 2 }}>
                {props.hwset_capacity} 
                </Typography>
            </Box>
        </div>
    );
}

export default HWSet;
