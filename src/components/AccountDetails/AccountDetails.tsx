import React from 'react'
import { Grid, Typography, IconButton, CardMedia } from '@material-ui/core'
import useStyles from './style'
import eth from '@static/icons/eth.png'
import Divider from '@components/Divider/Divider'
import FilledButton from '@components/FilledButton/FilledButton'
import SendIcon from '@material-ui/icons/Send'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import CopyToolTip from '@components/CopyToolTip/CopyToolTip'
import TokenLogo from '@components/TokenLogo/TokenLogo'
interface IProps {
  address: string
  tokenAddress: string
  balance: string
  onSend: () => void
  onBack: () => void
  ticker?: string
  iconURI?: string
}
export const AccountDetails: React.FC<IProps> = ({
  balance,
  address,
  onSend,
  tokenAddress,
  onBack,
  ticker,
  iconURI
}) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction='column'
      // alignItems='center'
      // justify='space-between'
      className={classes.root}>
      <Grid item style={{ marginTop: 20 }}>
        <Typography variant='body2' className={classes.title}>
          Your Account
        </Typography>
      </Grid>
      <Grid item>
        <CopyToolTip text={address}>
          <Typography variant='body2' className={classes.address}>
            {address}
          </Typography>
        </CopyToolTip>
      </Grid>
      <Grid item style={{ marginTop: 10 }}>
        <Divider />
      </Grid>
      <Grid item style={{ marginTop: 30 }}>
        <Grid container>
          <Grid item>
            <Typography variant='h1' className={classes.balance}>{`${balance}`}</Typography>
          </Grid>
          <Grid item style={{ marginLeft: 10 }}>
            <TokenLogo url={iconURI} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: 20 }}>
        <Typography variant='body2' className={classes.title}>
          Token address
        </Typography>
      </Grid>
      <Grid item>
        <CopyToolTip text={tokenAddress}>
          <Typography variant='body2' className={classes.address}>
            {tokenAddress}
          </Typography>
        </CopyToolTip>
      </Grid>
      {ticker && (
        <>
          <Grid item style={{ marginTop: 10 }}>
            <Typography variant='body2' className={classes.title}>
              Token symbol
            </Typography>
          </Grid>
          <Grid item>
            <CopyToolTip text={ticker}>
              <Typography variant='body2' className={classes.address}>
                {ticker}
              </Typography>
            </CopyToolTip>
          </Grid>
        </>
      )}
      <Grid item style={{ marginTop: 10 }}>
        <Divider />
      </Grid>
      <Grid item style={{ marginTop: 30, width: '100%' }}>
        <Grid container justify='space-between' direction='row'>
          <Grid item>
            <FilledButton
              className={classes.button}
              name='Send'
              variant='gray'
              onClick={() => {
                onSend()
              }}
              startIcon={<SendIcon></SendIcon>}></FilledButton>
          </Grid>
          <Grid item>
            <FilledButton
              className={classes.button}
              name='Buy'
              variant='gray'
              disabled
              // onClick={() => {
              //   setOpen(true)
              // }}
              startIcon={<AddCircleOutlineIcon></AddCircleOutlineIcon>}></FilledButton>
          </Grid>
          <Grid item>
            <FilledButton
              className={classes.button}
              name='Swap'
              variant='gray'
              disabled
              // onClick={() => {
              //   setOpen(true)
              // }}
              startIcon={<SwapHorizIcon></SwapHorizIcon>}></FilledButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: 70 }}>
        <Grid container justify='center'>
          <Grid item>
            <FilledButton
              className={classes.backButton}
              name='Go back'
              variant='color'
              onClick={() => {
                onBack()
              }}></FilledButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default AccountDetails
