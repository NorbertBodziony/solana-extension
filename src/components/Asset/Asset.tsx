import React from 'react'
import { Grid, Typography, IconButton, CardMedia } from '@material-ui/core'
import useStyles from './style'
import eth from '@static/icons/eth.png'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import TokenLogo from '@components/TokenLogo/TokenLogo'
interface IProps {
  name: string
  balance: string
  balanceUsd?: string
  onClick: () => void
  iconPath?: string
}
export const Asset: React.FC<IProps> = ({ balance, balanceUsd, onClick, name, iconPath }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      justify='space-between'
      className={classes.root}>
      <Grid item>
        <Grid container>
          <Grid item style={{ marginRight: 15 }}>
            <TokenLogo url={iconPath} />
          </Grid>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography
                  variant='h3'
                  className={classes.balanceName}>{`${balance.toString()} ${name}`}</Typography>
              </Grid>
              <Grid item style={{ marginTop: 4 }}>
                <Typography variant='body1' className={classes.usdBalance}>{`${
                  balanceUsd || '---'
                } USD`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <IconButton style={{ color: 'white' }} onClick={onClick}>
          <KeyboardArrowRightIcon fontSize='large' />
        </IconButton>
      </Grid>
    </Grid>
  )
}
export default Asset
