import { useContext } from 'react';
import { Context as BanksContext } from '../contexts/Banks';
import { Bank, ContractName } from '../tomb-finance';

const useBank = (contractName: ContractName): Bank => {
  const { banks } = useContext(BanksContext);
  if (contractName === "SnoShareJoeLPSnoShareRewardPool") {
    return banks.find(bank => bank.sectionInUI === 2 && bank.depositTokenName === "NOSNOSHARE-USDC-LP")
  } else if (contractName === "SnoJoeLPSnoShareRewardPool") {
    return banks.find(bank => bank.sectionInUI === 2 && bank.depositTokenName === "NOSNO-USDC-LP")
  } else if (contractName === "SnoSnoShareLPSnoShareRewardPool") {
    return banks.find(bank => bank.sectionInUI === 2 && bank.depositTokenName === "NOSNO-NOSNOSHARE-LP")
  } else if (contractName === "SnoSnoShareRewardPool") {
    return banks.find(bank => bank.sectionInUI === 2 && bank.depositTokenName === "NOSNO")
  } else {
    return null
  }
};

export default useBank;
