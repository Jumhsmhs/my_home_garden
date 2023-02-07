import './HomePost.css';

function HomePost(props) {
    const { flower, onBgClick } = props;
    return (
        <div className="flower-post">
            <div className="flower-post-bg" onClick={onBgClick}>
                <div className="flower-post-content">
                    <img src={flower.fullUrl} alt={flower.title} />
                    <h4>{flower.title}</h4>
                </div>
            </div>
        </div>
    );
}

export default HomePost;
