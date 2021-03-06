import { render, screen, wait } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import useGithubRepoFetch from './../../hooks/useGithubRepoFetch'
import RepoList from './RepoList';
jest.mock('./../../hooks/useGithubRepoFetch');
const mockResponse = {
  data: [{
    "id": 494567206,
    "node_id": "R_kgDOHXp_Jg",
    "name": "bionic-reading",
    "full_name": "ansh/bionic-reading",
    "private": false,
    "owner": {
        "login": "ansh",
        "id": 8207733,
        "node_id": "MDQ6VXNlcjgyMDc3MzM=",
        "avatar_url": "https://avatars.githubusercontent.com/u/8207733?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ansh",
        "html_url": "https://github.com/ansh",
        "followers_url": "https://api.github.com/users/ansh/followers",
        "following_url": "https://api.github.com/users/ansh/following{/other_user}",
        "gists_url": "https://api.github.com/users/ansh/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ansh/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ansh/subscriptions",
        "organizations_url": "https://api.github.com/users/ansh/orgs",
        "repos_url": "https://api.github.com/users/ansh/repos",
        "events_url": "https://api.github.com/users/ansh/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ansh/received_events",
        "type": "User",
        "site_admin": false
    },
    "html_url": "https://github.com/ansh/bionic-reading",
    "description": "A Chrome Extension for Bionic Reading on ANY website!",
    "fork": false,
    "url": "https://api.github.com/repos/ansh/bionic-reading",
    "forks_url": "https://api.github.com/repos/ansh/bionic-reading/forks",
    "keys_url": "https://api.github.com/repos/ansh/bionic-reading/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/ansh/bionic-reading/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/ansh/bionic-reading/teams",
    "hooks_url": "https://api.github.com/repos/ansh/bionic-reading/hooks",
    "issue_events_url": "https://api.github.com/repos/ansh/bionic-reading/issues/events{/number}",
    "events_url": "https://api.github.com/repos/ansh/bionic-reading/events",
    "assignees_url": "https://api.github.com/repos/ansh/bionic-reading/assignees{/user}",
    "branches_url": "https://api.github.com/repos/ansh/bionic-reading/branches{/branch}",
    "tags_url": "https://api.github.com/repos/ansh/bionic-reading/tags",
    "blobs_url": "https://api.github.com/repos/ansh/bionic-reading/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/ansh/bionic-reading/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/ansh/bionic-reading/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/ansh/bionic-reading/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/ansh/bionic-reading/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/ansh/bionic-reading/languages",
    "stargazers_url": "https://api.github.com/repos/ansh/bionic-reading/stargazers",
    "contributors_url": "https://api.github.com/repos/ansh/bionic-reading/contributors",
    "subscribers_url": "https://api.github.com/repos/ansh/bionic-reading/subscribers",
    "subscription_url": "https://api.github.com/repos/ansh/bionic-reading/subscription",
    "commits_url": "https://api.github.com/repos/ansh/bionic-reading/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/ansh/bionic-reading/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/ansh/bionic-reading/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/ansh/bionic-reading/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/ansh/bionic-reading/contents/{+path}",
    "compare_url": "https://api.github.com/repos/ansh/bionic-reading/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/ansh/bionic-reading/merges",
    "archive_url": "https://api.github.com/repos/ansh/bionic-reading/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/ansh/bionic-reading/downloads",
    "issues_url": "https://api.github.com/repos/ansh/bionic-reading/issues{/number}",
    "pulls_url": "https://api.github.com/repos/ansh/bionic-reading/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/ansh/bionic-reading/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/ansh/bionic-reading/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/ansh/bionic-reading/labels{/name}",
    "releases_url": "https://api.github.com/repos/ansh/bionic-reading/releases{/id}",
    "deployments_url": "https://api.github.com/repos/ansh/bionic-reading/deployments",
    "created_at": "2022-05-20T18:20:29Z",
    "updated_at": "2022-05-27T12:24:28Z",
    "pushed_at": "2022-05-27T10:59:06Z",
    "git_url": "git://github.com/ansh/bionic-reading.git",
    "ssh_url": "git@github.com:ansh/bionic-reading.git",
    "clone_url": "https://github.com/ansh/bionic-reading.git",
    "svn_url": "https://github.com/ansh/bionic-reading",
    "homepage": "https://www.jiffyreader.com/",
    "size": 205,
    "stargazers_count": 1827,
    "watchers_count": 1827,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 115,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 34,
    "license": {
        "key": "gpl-3.0",
        "name": "GNU General Public License v3.0",
        "spdx_id": "GPL-3.0",
        "url": "https://api.github.com/licenses/gpl-3.0",
        "node_id": "MDc6TGljZW5zZTk="
    },
    "allow_forking": true,
    "is_template": false,
    "topics": [
        "bionic-reading",
        "chrome-extension",
        "reading",
        "web-extension"
    ],
    "visibility": "public",
    "forks": 115,
    "open_issues": 34,
    "watchers": 1827,
    "default_branch": "master",
    "score": 1
},{
  "id": 495587598,
  "node_id": "R_kgDOHYoRDg",
  "name": "imagen-pytorch",
  "full_name": "lucidrains/imagen-pytorch",
  "private": false,
  "owner": {
      "login": "lucidrains",
      "id": 108653,
      "node_id": "MDQ6VXNlcjEwODY1Mw==",
      "avatar_url": "https://avatars.githubusercontent.com/u/108653?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/lucidrains",
      "html_url": "https://github.com/lucidrains",
      "followers_url": "https://api.github.com/users/lucidrains/followers",
      "following_url": "https://api.github.com/users/lucidrains/following{/other_user}",
      "gists_url": "https://api.github.com/users/lucidrains/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/lucidrains/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/lucidrains/subscriptions",
      "organizations_url": "https://api.github.com/users/lucidrains/orgs",
      "repos_url": "https://api.github.com/users/lucidrains/repos",
      "events_url": "https://api.github.com/users/lucidrains/events{/privacy}",
      "received_events_url": "https://api.github.com/users/lucidrains/received_events",
      "type": "User",
      "site_admin": false
  },
  "html_url": "https://github.com/lucidrains/imagen-pytorch",
  "description": "Implementation of Imagen, Google's Text-to-Image Neural Network, in Pytorch",
  "fork": false,
  "url": "https://api.github.com/repos/lucidrains/imagen-pytorch",
  "forks_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/forks",
  "keys_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/teams",
  "hooks_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/hooks",
  "issue_events_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/issues/events{/number}",
  "events_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/events",
  "assignees_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/assignees{/user}",
  "branches_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/branches{/branch}",
  "tags_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/tags",
  "blobs_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/languages",
  "stargazers_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/stargazers",
  "contributors_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/contributors",
  "subscribers_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/subscribers",
  "subscription_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/subscription",
  "commits_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/contents/{+path}",
  "compare_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/merges",
  "archive_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/downloads",
  "issues_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/issues{/number}",
  "pulls_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/labels{/name}",
  "releases_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/releases{/id}",
  "deployments_url": "https://api.github.com/repos/lucidrains/imagen-pytorch/deployments",
  "created_at": "2022-05-23T22:06:13Z",
  "updated_at": "2022-05-27T12:26:52Z",
  "pushed_at": "2022-05-26T19:57:59Z",
  "git_url": "git://github.com/lucidrains/imagen-pytorch.git",
  "ssh_url": "git@github.com:lucidrains/imagen-pytorch.git",
  "clone_url": "https://github.com/lucidrains/imagen-pytorch.git",
  "svn_url": "https://github.com/lucidrains/imagen-pytorch",
  "homepage": "",
  "size": 724,
  "stargazers_count": 1365,
  "watchers_count": 1365,
  "language": "Python",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 44,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 1,
  "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
  },
  "allow_forking": true,
  "is_template": false,
  "topics": [
      "artificial-intelligence",
      "deep-learning",
      "text-to-image"
  ],
  "visibility": "public",
  "forks": 44,
  "open_issues": 1,
  "watchers": 1365,
  "default_branch": "main",
  "score": 1
}],
  loading: false,
  setData:jest.fn()
};
useGithubRepoFetch.mockReturnValue(mockResponse)
describe('RepoList Test Cases', () => {
  
  test('Verify RepoList Items', async () => {
    render(<RepoList />);
    await wait(() => expect(screen.getByText("Implementation of Imagen, Google's Text-to-Image Neural Network, in Pytorch")).toBeInTheDocument());

    expect(screen.getByText("bionic-reading")).toBeInTheDocument();
    expect(screen.getByText("imagen-pytorch")).toBeInTheDocument();
  });

});
