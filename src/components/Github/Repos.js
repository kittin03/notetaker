import React from 'react';

const Repos = ({repos}) => {
  console.log('REPOS', repos);
  repos.map()
  return (
    <div>
      <h3>repos</h3>
      <ul className="list-group">
        {repos.map((repo, i) => {
          return (
            <li className="list-group-item" key={i}>
            // if repo has html_url property render h4
              {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
              {repo.description && <p>{repo.description}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  )};

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos;
