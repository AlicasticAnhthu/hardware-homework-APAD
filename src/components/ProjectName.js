import { Typography, Box} from '@mui/material';

function ProjectName (props) {
    return (
        <div>
            <Box className="project-header" sx={{ marginBottom: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
            {props.project_name}
            </Typography>
            <Typography variant="subtitle1" component="span">
            {props.project_description}
            </Typography>
            </Box>
        </div>
    )
}
export default ProjectName;