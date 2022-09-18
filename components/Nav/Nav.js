import WalletButton from "../WalletButton/WalletButton";
import styles from "./Nav.module.scss";

export default function Nav(props) {
    return (
        <div className={styles.nav}>
            <h2>Push Together</h2>
            <WalletButton />
        </div>
    )
}