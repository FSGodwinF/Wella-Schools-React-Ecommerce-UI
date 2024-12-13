import PropTypes from "prop-types";

const CartCard = ({ item, onRemove, onDecrement, onIncrement }) => {
    
    return (
    <div className=" card mb-3 shadow-sm">
      <div className="row g-0">
        <div className=" col-md-4">
          <img
            src={item.img}
            className="img-fluid rounded-start"
            alt={item.name}
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Price: ₦{item.price}</p>
            <p className="card-text">Quantity: {item.qty}</p>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-primary btn-sm me-2"
                onClick={() => onDecrement(item.id)}
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                className="btn btn-outline-primary btn-sm ms-2"
                onClick={() => onIncrement(item.id)}
              >
                +
              </button>
            </div>
            <p className="card-text pt-2">Total: ₦{item.price * item.qty}</p>
            <button
              className="btn btn-danger mt-2"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
  }),
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartCard;