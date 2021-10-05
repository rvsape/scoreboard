import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        minHeight: '50px',
        minWidth: '160px',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '0',
        [theme.breakpoints.down('390')]: {
            minWidth: '60px',
        },
    }
}));

function CustomButton({title, color="primary", onClick, variant, fullWidth=false, elevated = true, disabled = false}) {
    const classes = useStyles();

    return (
        <Button
            variant={variant}
            disableElevation={!elevated}
            color={color}
            style={{
                color: color === 'secondary' ? '#fff' : '#004750'
            }}
            onClick={onClick}
            className={classes.button}
            fullWidth
            disabled={disabled}
        >
            {title}
        </Button>
    )
}

export default CustomButton;