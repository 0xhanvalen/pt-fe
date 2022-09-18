import { useAccount, useConnect, useEnsName, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import styles from "./WalletButton.module.scss";

export default function WalletButton(props) {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const handleClick = () => {
    isConnected ? disconnect() : connect();
  };

  const shortAddress = (address) => {
    return `${address?.substring(0,4)}....${address?.substring(address.length - 4, address.length)}`
  }

  return (
    <div className={styles.walletButton} onClick={handleClick}>
      {address && !ensName && shortAddress(address)}
      {ensName && ensName}
      {!isConnected && "Connect Wallet"}
    </div>
  );
}
