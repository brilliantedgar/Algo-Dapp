import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/logo_notsnowy_native.gif';
import tShareLogo from '../../assets/img/logo_notsnowy_share.gif';
import tombLogoPNG from '../../assets/img/sno.png';
import tShareLogoPNG from '../../assets/img/snoshare.png';
import tBondLogo from '../../assets/img/logo_notsnowy_bond.png';

import tombFtmLpLogo from '../../assets/img/sno-joe.png';
import tshareFtmLpLogo from '../../assets/img/snoshare-joe.png';
import snoSnoShareLpLogo from "../../assets/img/sno-snoshare.png";

import wftmLogo from '../../assets/img/joe.png';
import booLogo from '../../assets/img/spooky.png';
import zooLogo from '../../assets/img/zoo_logo.svg';
import shibaLogo from '../../assets/img/shiba_logo.svg';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  TOMB: tombLogo,
  TOMBPNG: tombLogoPNG,
  TSHAREPNG: tShareLogoPNG,
  HSHARE: tShareLogo,
  NOSNOBOND: tBondLogo,
  HBOND: tBondLogo,
  WFTM: wftmLogo,
  BOO: booLogo,
  SHIBA: shibaLogo,
  ZOO: zooLogo,

  NOSNO: tombLogo,
  NOSNOSHARE: tShareLogoPNG,
  'NOSNO-USDC-LP': tombFtmLpLogo,
  'NOSNOSHARE-USDC-LP': tshareFtmLpLogo,
  "NOSNO-NOSNOSHARE-LP": snoSnoShareLpLogo

  //SNO: tombLogo,
  //SNOSHARE: tShareLogoPNG,
  //'SNO-JOE-LP': tombFtmLpLogo,
  //'SNOSHARE-JOE-LP': tshareFtmLpLogo,
  //"SNO-SNOSHARE-LP": snoSnoShareLpLogo,

};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 90 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
