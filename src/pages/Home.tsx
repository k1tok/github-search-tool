import { useState } from "react";
import type { FunctionComponent } from "../common/types";
import SearchNav from "../components/SearchNav/SearchNav";
import StartSearch from "../components/StartSearch/StartSearch";
import type {
	RepoData,
	UserData,
} from "../components/SearchNav/SearchNavDataTypes";
import FoundUser from "../components/FoundUser/FoundUser";
import "../styles/global.css";

export const Home = (): FunctionComponent => {
	const [username, setUsername] = useState<string>("");
	const [userData, setUserData] = useState<UserData | null>(null);
	const [userRepo, setUserRepo] = useState<Array<RepoData>>([]);
	const [error, setError] = useState<string | null>(null);

	return (
		<div className="h-screen">
			<SearchNav
				setError={setError}
				setUserData={setUserData}
				setUserRepo={setUserRepo}
				setUsername={setUsername}
				username={username}
			/>
			{!userData && !error && (
				<StartSearch title="Start with searching a GitHub user" />
			)}
			{userData && <FoundUser userData={userData} userRepo={userRepo} />}
			{error && <h1>Not Found</h1>}
		</div>
	);
};
