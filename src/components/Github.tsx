const Github = () => {

    const openGithub = () => {
        window.open('http://github.com/seth-lawrence');
    }

    return (
      <span>
        <a className='Github' onClick={openGithub}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
        </a>
      </span>
    );
  }

  export default Github;
