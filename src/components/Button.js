import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        minHeight: '50px',
        minWidth: '160px',
        [theme.breakpoints.down('390')]: {
            minWidth: '60px',
        },
    }
}));

function CustomButton({title, color, onClick, variant, fullWidth=false, elevated = true}) {
    const classes = useStyles();
    return (
        <Button
            variant={variant}
            disableElevation={!elevated}
            color={color}
            onClick={onClick}
            className={classes.button}
            fullWidth
        >
            {title}
        </Button>
    )
}

export default CustomButton;