import * as React from "react";

type Props = {
    commits: Array<any>;
};

const CommitCards = ({ commits }: Props) => {
    return (
        <div>
            <ul id="commits">
                {commits.map((commit, index) => (
                    <li key={"commit-" + index}>
                        <div className="commit-head">
                            <span className="author">
                                <a href={commit.author.html_url} target="_blank" rel="noreferrer">
                                    {commit.commit.author.name}
                                </a>
                                &nbsp;–&nbsp;
                                <a href={commit.html_url} target="_blank" rel="noreferrer">
                                    {commit.sha.slice(0, 7)}
                                </a>
                            </span>
                            <span className="date">{formatDate(commit.commit.author.date)}</span>
                        </div>
                        <p className="message">{truncate(commit.commit.message)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const formatDate = (v: string) => {
    return v.replace(/T|Z/g, " ");
};

const truncate = (v: string) => {
    const newline = v.indexOf("\n");
    return newline > 0 ? v.slice(0, newline) : v;
};

export default CommitCards;
