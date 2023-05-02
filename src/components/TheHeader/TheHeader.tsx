import styles from './TheHeader.module.scss';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

export const TheHeader = () => (
    <div className={styles.header} data-testid="TheHeader">
        <div className={styles.logo}>devFinder</div>
        <ThemeSwitcher />
    </div>
);
