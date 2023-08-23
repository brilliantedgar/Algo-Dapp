import React, { useMemo } from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';
import Label from '../../components/Label';
import { getDisplayBalance } from '../../utils/formatBalance';
import useTokenBalance from '../../hooks/useTokenBalance';
import HomeVideo from '../../assets/img/rain.mp4';
import HomeImage from '../../assets/img/background-notsnowy.jpg';
// import CashImage from '../../assets/img/logo_tomb4.png';
import AvaxLogo from '../../assets/img/joe.png';
// import Image from 'material-ui-image';
// import styled from 'styled-components';
// import { Alert } from '@material-ui/lab';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
// import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useTombStats from '../../hooks/useTombStats';
import useLpStats from '../../hooks/useLpStats';
import useModal from '../../hooks/useModal';
import useFantomPrice from '../../hooks/useFantomPrice.js';
import useBondStats from '../../hooks/useBondStats';
import usetShareStats from '../../hooks/usetShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import { tomb as tombTesting, tShare as tShareTesting } from '../../tomb-finance/deployments/deployments.testing.json';
import { tomb as tombProd, tShare as tShareProd } from '../../tomb-finance/deployments/deployments.mainnet.json';

import { Box, Button, CardContent, Grid } from '@material-ui/core';
import { Card as Card2 } from '@material-ui/core';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

import { makeStyles } from '@material-ui/core/styles';
import useTombFinance from '../../hooks/useTombFinance';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      marginTop: '10px',
    },
  },
  tokenButton: {},
  "@media only screen and (max-width: 1200px)": {
    tokenButton: {
      fontSize: "12px",
      marginRight: "4%"
    }
  },
  flex: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    alignItems: "center",
    flexWrap: "wrap"
  },
  "@media only screen and (max-width: 850px)": {
    tokenButton: {
      width: "40% !important"
    },
  },
  "@media only screen and (max-width: 670px)": {
    tokenButton: {
      width: "80% !important"
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const tombFtmLpStats = useLpStats('NOSNO-USDC-LP');
  const tShareFtmLpStats = useLpStats('NOSNOSHARE-USDC-LP');
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const tBondStats = useBondStats();
  const tombFinance = useTombFinance();
  const { price: USDCPrice, marketCap: USDCMarketCap, priceChange: USDCPriceChange } = useFantomPrice();

  let tomb;
  let tShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    tomb = tombTesting;
    tShare = tShareTesting;
  } else {
    tomb = tombProd;
    tShare = tShareProd;
  }

  const buyTombAddress = 'https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D';
  const buyTShareAddress = 'https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875';

  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const tombPriceInDollars = useMemo(
    () => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null),
    [tombStats],
  );
  const tombPriceInFTM = useMemo(() => (tombStats ? Number(tombStats.tokenInFtm).toFixed(4) : null), [tombStats]);
  const tombCirculatingSupply = useMemo(() => (tombStats ? String(tombStats.circulatingSupply) : null), [tombStats]);
  const tombTotalSupply = useMemo(() => (tombStats ? String(tombStats.totalSupply) : null), [tombStats]);

  const tSharePriceInDollars = useMemo(
    () => (tShareStats ? Number(tShareStats.priceInDollars).toFixed(2) : null),
    [tShareStats],
  );
  const tSharePriceInFTM = useMemo(
    () => (tShareStats ? Number(tShareStats.tokenInFtm).toFixed(4) : null),
    [tShareStats],
  );
  const tShareCirculatingSupply = useMemo(
    () => (tShareStats ? String(tShareStats.circulatingSupply) : null),
    [tShareStats],
  );
  const tShareTotalSupply = useMemo(() => (tShareStats ? String(tShareStats.totalSupply) : null), [tShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInFTM = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const tombBalance = useTokenBalance(tombFinance.TOMB);
  const displayTombBalance = useMemo(() => getDisplayBalance(tombBalance), [tombBalance]);
  const tombBalanceinDollars = (displayTombBalance * tombPriceInDollars).toFixed(2);

  const tshareBalance = useTokenBalance(tombFinance.TSHARE);
  const displayTshareBalance = useMemo(() => getDisplayBalance(tshareBalance), [tshareBalance]);
  const tshareBalanceinDollars = (displayTshareBalance * tSharePriceInDollars).toFixed(2);

  const tbondBalance = useTokenBalance(tombFinance.TBOND);
  const displayTbondBalance = useMemo(() => getDisplayBalance(tbondBalance), [tbondBalance]);
  const tbondBalanceinDollars = (displayTbondBalance * tBondPriceInFTM).toFixed(2);



  const StyledLink = styled.a`
    font-weight: 700;
    text-decoration: none;
    color: #E6E6E6;
  `;

  const Row = styled.div`
  font-family: Quicksand, cursive;
  align-items: center;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  margin-bottom: 8px;
`;

  const [onPresentModal] = useModal(
    <Modal>
    <Box p={4}>
              <h1 style={{ color: '#5686d6'}}>Welcome to</h1>
              <h1>Not Snowy Finance</h1>
              <p>One of The first algorithmic stablecoin on Avalanche C Chain, pegged to the price of 1 AVAX via seigniorage.</p>
              <p>
                Stake your TOMB-AVAX LP in the farms to earn HSHARE rewards.
                Then stake your earned HSHARE in the boardroom to earn more TOMB!
              </p>
              <StyledLink href='https://github.com/0xGuard-com/audit-reports/blob/master/tomb-finance/Tomb-Finance_final-audit-report.pdf'>Link to Audit Report</StyledLink>
              <p></p>  
              <img alt='0xguard' src='https://gateway.pinata.cloud/ipfs/QmYBxp5LCFmmYrZcgQQiznhsZkcfQhJ8dvwEgdBPorZ1A7?preview=1' width={200}/>
              <p></p>
              <StyledLink href='https://rugdoc.io/project/tomb-finance/'>Link to KYC</StyledLink>
              <p></p>  
              <img alt='kyc' src='https://gateway.pinata.cloud/ipfs/QmPDKWKCH8Zr5NHyQ5LzaG3H2xTiU7ui1MvoSagpLFQjWf?preview=1' width={200}/>

            </Box>
    </Modal>,
  );

  
  return (
    <Page>

      {/*<BackgroundImage />*/}
      <video autoPlay muted loop preload={'auto'} id="myVideo" style={{ zIndex: -420 }} >
        <source src={HomeVideo} type="video/mp4"></source>
      </video>


      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        {/* Logo */}
        <Card>
          <CardContent style={{ position: 'relative' }}>
            <Box p={4}>
              <h1 style={{ color: '#ffffff'}}>My balance</h1>
            </Box>
             <Balances>
                <StyledBalanceWrapper>
                  <TokenSymbol symbol="TOMB" />
                  <StyledBalance>
                      <StyledValue>{displayTombBalance}</StyledValue>
                      <Label text=" NOSNO available" />
                      <span style={{ fontSize: '15px', marginLeft:'2%'}}> (${tombBalanceinDollars ? tombBalanceinDollars : '-.----'})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <div className={classes.flex}>
                      <Button color="primary" target="_blank" href={buyTombAddress} variant="contained" style={{ marginTop: '10px', borderRadius:'10px', width: '27%', marginRight: '5%'}} className={classes.tokenButton}>
                        Buy
                      </Button>
                      <Button color="primary" target="_blank" href="https://dexscreener.com/avalanche/0xe63b66a8cf7811525cd15dab15f17fb62aa5af2f" variant="contained" style={{ marginTop: '10px', borderRadius:'10px', width: '27%', marginRight: '5%'}} className={classes.tokenButton}>
                        Chart
                      </Button>
                      <Button color="primary" target="_blank" href="https://snowtrace.io/address/0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D#code" variant="contained" style={{ marginTop: '10px', borderRadius:'10px', width: '27%', marginRight: '5%'}} className={classes.tokenButton}>
                        Contract
                      </Button>
                      </div>
                  </StyledBalance>                  
                </StyledBalanceWrapper>
                <StyledBalanceWrapper>
                  <TokenSymbol symbol="HSHARE" />
                  <StyledBalance>
                    <StyledValue>{displayTshareBalance}</StyledValue>
                    <Label text=" NOSNOSHARE available                             " />
                    <span style={{ fontSize: '15px', marginLeft:'2%' }}> (${tshareBalanceinDollars ? tshareBalanceinDollars : '-.----'})</span>
                    <div className={classes.flex}>
                    <Button color="primary" target="_blank" href={buyTShareAddress} variant="contained" style={{ marginTop: '10px', borderRadius:'10px', width: '27%', marginRight: '5%'}} className={classes.tokenButton}>
                        Buy
                      </Button>
                      <Button color="primary" target="_blank" href="https://dexscreener.com/avalanche/0x061349a57b702ebe3139ca419457bb23f7e0d8a2" variant="contained" style={{ marginTop: '10px', borderRadius:'10px', width: '27%', marginRight: '5%'}} className={classes.tokenButton}>
                        Chart
                      </Button>
                      <Button color="primary" target="_blank" href="https://snowtrace.io/address/0xe7a102fbc8ab3581d62830ddb599eccaae5e7875#code" variant="contained" style={{ marginTop: '10px', borderRadius:'10px', width: '27%', marginRight: '5%'}} className={classes.tokenButton}>
                        Contract
                      </Button>
                      </div>
                  </StyledBalance>
                </StyledBalanceWrapper>
                <StyledBalanceWrapper>
                  <TokenSymbol symbol="HBOND" />
                  <StyledBalance>
                      <StyledValue>{displayTbondBalance}</StyledValue>
                      <Label text=" NOSNOBOND available" />
                      <span style={{ fontSize: '15px', marginLeft:'2%' }}> (${tbondBalanceinDollars ? tbondBalanceinDollars : '-.----'})</span>
                      <div className={classes.flex}>
                      <Button color="primary" href="/bonds" variant="contained" style={{ marginTop: '10px', borderRadius:'10px', width: '27%', marginRight: '5%'}} className={classes.tokenButton}>
                        Bond
                      </Button>
                      <Button color="primary" target="_blank" href="https://snowtrace.io/address/0x8aB4Ac266d8e698b7E39f97Ec17876076680f6f1#code" variant="contained" style={{ marginTop: '10px', borderRadius:'10px', width: '27%', marginRight: '5%'}} className={classes.tokenButton}>
                        Contract
                      </Button>
                      </div>
                </StyledBalance>
               </StyledBalanceWrapper>
              </Balances>
          </CardContent>
          {/* <Paper>xs=6 sm=3</Paper> */}
        </Card>
        </Grid>
        {/* Explanation text */}
        <Grid item xs={12} sm={6}>
            <Box p={4}>
              <h1>Welcome to</h1>
              <h1>Not Snowy Finance</h1>
              <h4 style={{ color: '#d65656', marginTop:'4%' }}>Bringing more degens and utility to the Avalanche-C Chain.</h4>
              <h4 style={{ color: '#d65656' }}>$NOSNO is pegged at a ratio of 1:1 with $USDC.</h4>
              <h4 style={{ color: '#d65656', marginBottom: '3%' }}>Earn and stake $NOSNOSHARE to help peg $NOSNO with seigniorage.</h4>

            </Box>

            <Grid item xs={20} sm={12} style={{ display: 'flex'}}>
          <Card style={{ borderRadius: '20px', backgroundColor: '#161414'}}>
            <CardContent style={{ margin: '37px'}}>
              <h1>Total Value Locked</h1>
              <CountUp style={{ fontSize: '40px' }} end={TVL} separator="," prefix="$" />
            </CardContent>
          </Card>
        </Grid>



        </Grid>
       {/* TVL */}
       



         {/* Wallet */}
       {/* <Grid item xs={12} sm={8}>
          <Card style={{ height: '100%' }}>
            <CardContent align="center" style={{ marginTop: '2.5%' }}>
              {/* <h2 style={{ marginBottom: '20px' }}>Wallet Balance</h2> */}
          {/*    <Button color="primary" href="/boardroom" variant="contained" style={{ marginRight: '10px' }}>
                Stake Now
              </Button>
              <Button href="/farms" variant="contained" style={{ marginRight: '10px' }}>
                Farm Now
              </Button>
              <Button
                color="primary"
                target="_blank"
                href={buyTombAddress}
                variant="contained"
                style={{ marginRight: '10px' }}
                className={classes.button}
              >
                Buy TOMB
              </Button>
              <Button variant="contained" target="_blank" href={buyTShareAddress} className={classes.button}>
                Buy HSHARE
              </Button>
            </CardContent>
          </Card>
       </Grid> */}

        {/* TOMB */}
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
               <Box align='center' mt={2}>
                  <TokenSymbol symbol="WFTM" />
              </Box>
              <h2 align='center'>USDC</h2>
              <p align='center'>Current Price</p>
              <Box align='center'>
                <span style={{ fontSize: '30px' }}>${USDCPrice ? USDCPrice : '-.----'}</span>
              </Box>
              <Box align='center' marginBottom={3}>
              &nbsp;
                {/* <span style={{ fontSize: '16px', alignContent: 'flex-start' }}>
                  ${tombPriceInDollars ? tombPriceInDollars : '-.--'}
                </span> */}
              </Box>
              <Row>
              <span style={{ fontSize: '14px' }}>
                Market Cap:<br />
                24h Price Change:  <br />
                &nbsp;
              </span>
              <span style={{ fontSize: '14px' }}>
                ${USDCMarketCap} <br />
                {USDCPriceChange.toFixed(2)}% <br />
                &nbsp;
              </span>
              </Row>
              <Box>
              <Button
                color="primary"
                target="_blank"
                href={"https://traderjoexyz.com/trade?outputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd#/"}
                variant="contained"
                style={{ marginTop: '10px', borderRadius:'10px', width: '100%'}}
                className={classes.button}
              >
                Purchase
              </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
               <Box align='center' mt={2}>
                  <TokenSymbol symbol="TOMB" />
              </Box>
              <h2 align='center'>NOSNO</h2>
              <p align='center'>Current Price</p>
              <Box align='center'>
                <span style={{ fontSize: '30px' }}>{tombPriceInFTM ? tombPriceInFTM : '-.----'} <img alt="logo" style={{ width: '30px'}} src={AvaxLogo} /></span>
              </Box>
              <Box align='center' marginBottom={3}>
                <span style={{ fontSize: '16px', alignContent: 'flex-start' }}>
                  ${tombPriceInDollars ? tombPriceInDollars : '-.--'}
                </span>
              </Box>
              <Row>
              <span style={{ fontSize: '14px' }}>
                Market Cap:<br />
                Circulating Supply:  <br />
                Total Supply:
              </span>
              <span style={{ fontSize: '14px' }}>
                ${((tombCirculatingSupply-20000) * tombPriceInDollars).toFixed(2)} <br />
                {tombCirculatingSupply-20000} <br />
                {tombTotalSupply}
              </span>
              </Row>
              <Box>
              <Button
                color="primary"
                target="_blank"
                href={buyTombAddress}
                variant="contained"
                style={{ marginTop: '10px', borderRadius:'10px', width: '100%'}}
                className={classes.button}
              >
                Purchase
              </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* TSHARE */}
        <Grid  item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
               <Box align='center' mt={2}>
                  <TokenSymbol symbol="HSHARE" />
              </Box>
              <h2 align='center'>NOSNOSHARE</h2>
              <p align='center'>Current Price</p>
              <Box align='center'>
                <span style={{ fontSize: '30px' }}>{tSharePriceInFTM ? tSharePriceInFTM : '-.----'} <img alt="logo" style={{ width: '30px'}} src={AvaxLogo} /></span>
              </Box>
              <Box align='center' marginBottom={3}>
                <span style={{ fontSize: '16px' }}>${tSharePriceInDollars ? tSharePriceInDollars : '-.--'}</span>
              </Box>
              <Row>
              <span style={{ fontSize: '14px' }}>
                Market Cap:  <br />
                Circulating Supply:  <br />
                Total Supply: 
              </span>
              <span style={{ fontSize: '14px' }}>
                 ${(tShareCirculatingSupply * tSharePriceInDollars).toFixed(2)} <br />
                 {tShareCirculatingSupply} <br />
                 {tShareTotalSupply}
              </span>
              </Row>
              <Box>
              <Button
                color="primary"
                target="_blank"
                href={buyTShareAddress}
                variant="contained"
                style={{ marginTop: '10px', borderRadius:'10px', width: '100%'}}
                className={classes.button}
              >
               Purchase
              </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* TBOND */}
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
              <Box  align="center" mt={2}>
                  <TokenSymbol symbol="HBOND" />
              </Box>
              <h2 align="center">NOSNOBOND</h2>
              <p align="center">Current Price</p>
              <Box align="center">
                <span style={{ fontSize: '30px' }}>{tBondPriceInFTM ? tBondPriceInFTM : '-.----'} <img alt="logo" style={{ width: '30px'}} src={AvaxLogo} /></span>
              </Box>
              <Box align='center' marginBottom={3}>
                <span style={{ fontSize: '16px' }}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</span>
              </Box>
              <Row>
              <span style={{ fontSize: '14px' }}>
                Market Cap:  <br />
                Circulating Supply:  <br />
                Total Supply: 
              </span>
              <span style={{ fontSize: '14px' }}>
                 ${(tBondCirculatingSupply * tBondPriceInDollars).toFixed(2)} <br />
                {tBondCirculatingSupply} <br />
                 {tBondTotalSupply}
              </span>
              </Row>
              <Box>
              <Button
                color="primary"
                target="_blank"
                href="/bonds"
                variant="contained"
                style={{ marginTop: '10px', borderRadius:'10px', width: '100%'}}
                className={classes.button}
              >
                Bond
              </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <h2>NOSNO-USDC LP</h2>
              <Box mt={2}>
                  <TokenSymbol symbol="NOSNO-USDC-LP" />
              </Box>
              <Box mt={2}>
                <span style={{ fontSize: '26px' }}>
                  {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} NOSNO /{' '}
                  {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} USDC
                </span>
              </Box>
              <Box>${tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Liquidity: ${tombLPStats?.totalLiquidity ? tombLPStats.totalLiquidity : '-.--'} <br />
                Total supply: {tombLPStats?.totalSupply ? tombLPStats.totalSupply : '-.--'}
              </span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <h2>NOSNOSHARE-USDC LP</h2>
              <Box mt={2}>
                  <TokenSymbol symbol="NOSNOSHARE-USDC-LP" />
              </Box>
              <Box mt={2}>
                <span style={{ fontSize: '26px' }}>
                  {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} NOSNOSHARE /{' '}
                  {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} USDC
                </span>
              </Box>
              <Box>${tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Liquidity: ${tshareLPStats?.totalLiquidity ? tshareLPStats.totalLiquidity : '-.--'}
                <br />
                Total supply: {tshareLPStats?.totalSupply ? tshareLPStats.totalSupply : '-.--'}
              </span>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

const StyledValue = styled.div`
  //color: ${(props) => props.theme.color.grey[300]};
  font-size: 30px;
  font-weight: 700;
`;

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 1%;
`;

export default Home;
