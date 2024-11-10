const Footer = ({ handleToggleMOdal, data }) => {
  return (
    <footer>
      <div className='bgGradient'></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleMOdal}>
        <i className='fa-solid fa-circle-info'></i>
      </button>
    </footer>
  );
};

export default Footer;
