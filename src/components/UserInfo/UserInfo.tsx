import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import styles from './UserInfo.module.scss';
import { LocalGitHubUsers } from 'types';
import { InfoItem, InfoItemProps } from 'components/InfoItem';

interface UserInfoProps extends Pick<LocalGitHubUsers, 'blog' | 'company' | 'location' | 'twitter'> {}

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
    const items: InfoItemProps[] = [
        {
            icon: <LocationIcon />,
            text: location,
        },
        {
            icon: <CompanyIcon />,
            text: company,
        },
        {
            icon: <BlogIcon />,
            text: blog,
            isLink: true,
        },
        {
            icon: <TwitterIcon />,
            text: twitter,
        },
    ];
    return (
        <div className={styles.userInfo}>
            {items.map((item, index) => (
                <InfoItem {...item} key={index} />
            ))}
        </div>
    );
};
