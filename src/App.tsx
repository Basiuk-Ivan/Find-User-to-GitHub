import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';
import { defaultUser } from 'mock';
import { useState } from 'react';
import { GitHubError, GitHubUsers, LocalGitHubUsers } from 'types';
import { extractLocalUser } from 'utils/extract';
import { isTypeGuard } from 'utils/typeGuard';

const BASE_URL = 'https://api.github.com/users/';

function App() {
    const [user, setUser] = useState<LocalGitHubUsers | null>(defaultUser);
    const fetchUser = async (userName: string) => {
        const url = BASE_URL + userName;
        const res = await fetch(url);

        const user = (await res.json()) as GitHubUsers | GitHubError;
        if (isTypeGuard(user)) {
            setUser(extractLocalUser(user));
        } else {
            setUser(null);
        }
    };
    return (
        <>
            <Container>
                <TheHeader />
                <Search hasError={!user} onSubmit={fetchUser} />
                {user && <UserCard {...user} />}
            </Container>
        </>
    );
}

export default App;
