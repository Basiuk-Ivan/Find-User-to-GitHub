import { GitHubUsers } from 'types';

export const isTypeGuard = (user: any): user is GitHubUsers => 'id' in user;
