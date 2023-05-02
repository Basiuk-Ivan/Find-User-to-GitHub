import React from 'react';
import styles from './UserCard.module.scss';
import { UserStat, UserStatProps } from 'components/UserStat';
import { LocalGitHubUsers } from 'types';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGitHubUsers {}

export const UserCard = (props: UserCardProps) => (
    <div className={styles.userCard}>
        <img src={props.avatar} alt={props.login} className={styles.avatar} />
        <UserTitle name={props.name} created={props.created} login={props.login} />
        <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
            {props.bio || 'This profile has no bio'}
        </p>
        <UserStat repos={props.repos} followers={props.followers} following={props.following} />
        <UserInfo blog={props.blog} company={props.company} location={props.location} twitter={props.twitter} />
    </div>
);
