import './HomeItem.css';

function HomeItem(props) {
    const { flower, onFlowerClick } = props;
    return (
        <div className="flower-item">
            <img src={flower.thumbnaiUrl} onClick={() => onFlowerClick(flower)} alt={flower.title} />
            <h4> {flower.title}</h4>
        </div>
    );
}
export default HomeItem; 