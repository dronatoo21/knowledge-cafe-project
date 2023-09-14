import PropTypes from 'prop-types';
const Bookmarks = ({bookmaks}) => {
    const { Title } = bookmaks;
    return (
        <div>
            <h3 className="text-3xl">{Title}</h3>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmak: PropTypes.array.isRequired
}

export default Bookmarks;