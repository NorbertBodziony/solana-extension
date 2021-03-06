import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 60,
    padding: '0px 30px',
    paddingRight: 15,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: ' 0px 0px 15px 15px',
    position: 'relative'
  },
  menu: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: 400,
    width: 300,
    position: 'absolute',
    top: 70,
    zIndex: 100
  },
  logo: {
    height: 36,
    width: 36
    // backgroundColor: colors.gray['#747474']
  },
  logoAvatar: {
    cursor: 'pointer'
    // height: 20,
    // width: 20
    // backgroundColor: colors.gray['#747474']
  },
  button: {
    borderRadius: 5,
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    transition: 'all 500ms ease',
    minWidth: 110,
    padding: '2px 10px',
    color: colors.white.main,
    border: '1px solid #FFFFFF'
    // background:
    //   'radial-gradient(97.27% 960.82% at 0% 0%, rgba(255, 161, 240, 0.4) 0%, rgba(134, 60, 255, 0.4) 100%)',
    // '&:hover': {
    //   background: 'none'
    // }
  },
  airdropButton: {
    borderRadius: 5,
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    transition: 'all 500ms ease',
    minWidth: 70,
    padding: '2px 8px',
    color: colors.white.main,
    border: '1px solid #FFFFFF',
    marginRight: 15
    // background:
    //   'radial-gradient(97.27% 960.82% at 0% 0%, rgba(255, 161, 240, 0.4) 0%, rgba(134, 60, 255, 0.4) 100%)',
    // '&:hover': {
    //   background: 'none'
    // }
  },
  drawer: {
    borderRadius: '15px 15px 0px 0px',

    backgroundColor: colors.black.background
  },
  moreButton: {
    color: colors.white.main,
    marginTop: -2,
    height: 30,
    width: 30
  },
  drawerRoot: {
    borderRadius: '15px 15px 0px 0px',
    width: 360,
    paddingTop: 40,
    paddingBottom: 80
  },
  drawerTitle: {
    padding: `0px 40px`,
    marginBottom: 20
  },
  drawerEntry: {
    padding: `10px 40px`,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)'
    }
  },
  aidropDiv: {
    position: 'absolute',
    top: 75,
    right: 5
  },
  divider: { padding: `0px 40px`, marginTop: 15 },
  buttonAccounts: {
    borderRadius: 5,
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'all 500ms ease',
    minWidth: 160,
    height: 28,
    padding: '2px 10px',
    color: colors.white.main
  }
}))

export default useStyles
