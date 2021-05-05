import { Toolbar, Typography } from "@material-ui/core/";
import { makeStyles } from '@material-ui/core/styles';
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';

const useStyles = makeStyles((theme) => ({
  text: {
      width: '100%',
      color: theme.palette.text.secondary
  },
  toolBar: {
      backgroundColor: theme.palette.background.paper,
      minHeight: '35px',
      width: '100%',
      position: 'fixed',
      bottom: '0'
  },
  link: {
      color: theme.palette.secondary.light,
      textDecoration: 'none',
      '&:hover': {
          textDecoration: 'underline'
      }
  }
}));

export default function FooterBar(){
    const classes = useStyles();
    return(
        <Toolbar className={classes.toolBar}>
            <Typography variant="caption" align="center" className={classes.text}>
                Desenvolvido com <LocalCafeTwoToneIcon fontSize="small"/> por <a href="mailto:d_s_lima@outlook.com" className={classes.link}>Daniel Santos</a>
            </Typography>
            
        </Toolbar>
    )
}