import * as React from "react";
import useMessage from "../PhotinoUtils/Messaging";
import "./App.css";
import BranchSelector from "./BranchSelector";
import CommitCards from "./CommitCards";

const API_URL = `https://api.github.com/repos/tryphotino/photino.NET/commits?per_page=3&sha=`;

const branches = ["master", "debug"];

const App = () => {
    const [currentBranch, setCurrentBranch] = React.useState<string | undefined>();
    const [backendMessages, setBackendMessages] = React.useState<Array<string>>([]);
    const [commits, setCommits] = React.useState<Array<string>>([]);

    const onMessage = React.useCallback(
        (message: string) => {
            setBackendMessages([...backendMessages, "Blaa: " + message]);
        },
        [backendMessages]
    );

    const [sendMessage] = useMessage(onMessage);

    const selectBranch = React.useCallback((branch: string) => {
        setCurrentBranch(branch);
        void fetchCommits(branch).then(f => setCommits(f));
    }, []);

    React.useEffect(() => {
        selectBranch("master");
    }, [selectBranch]);

    return (
        <div id="content">
            <h1>Latest Photino.NET Commits</h1>
            <BranchSelector //
                options={branches}
                value={currentBranch}
                onChange={selectBranch}
            />
            <p>tryphotino/photino.NET @{currentBranch}</p>
            <CommitCards commits={commits} />
            <li>
                {backendMessages.map((f, index) => (
                    <ul key={index}>{f}</ul>
                ))}
            </li>
            <button onClick={() => sendMessage("LÄLLÄÄ")} />
        </div>
    );
};

const fetchCommits = async (branch: string) => {
    const url = `${API_URL}${branch}`;
    const fetchData = await fetch(url);
    return fetchData.json();
};

export default App;
