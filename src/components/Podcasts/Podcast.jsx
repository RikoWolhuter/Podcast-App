import PropTypes from "prop-types";

const Podcast = ({ podcasts }) => {
  const imgStyle = {
    maxWidth: "200px",
    height: "auto",
  };
  return (
    <div>
      <h2>Podcasts</h2>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <img src={podcast.img} alt={podcast.title} style={imgStyle} />
            <h3>{podcast.title}</h3>
            <h4>{podcast.seasons}</h4>
            <p>{podcast.genre}</p>
            <p>{podcast.updated}</p>
            <p>{podcast.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Podcast.propTypes = {
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      genre: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      updated: PropTypes.string.isRequired,
      seasons: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Podcast;
