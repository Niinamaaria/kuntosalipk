import styles from './header.module.scss';

function Header(props) {
    return (
        <div className={styles.header}>
            Kuntosalipäiväkirja
        </div>
    );
}

export default Header;