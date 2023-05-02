import styles from './UserStat.module.scss';
import { LocalGitHubUsers } from 'types';

export interface UserStatProps extends Pick<LocalGitHubUsers, 'repos' | 'followers' | 'following'> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
    <div className={styles.userStat}>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Repos</div>
            <div className={styles.Number}>{repos}</div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Following</div>
            <div className={styles.Number}>{following}</div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Followers</div>
            <div className={styles.Number}>{followers}</div>
        </div>
    </div>
);
