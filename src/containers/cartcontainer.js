// src/containers/cartcontainer.js
import { connect } from 'react-redux';
import Cart from '../components/cart.js';
import { add, remove } from '../services/actions/action';

const mapStateToProps = (state) => ({
    data: state.carditem
});

const mapDispatchToProps = (dispatch) => ({
    addtocart: (data) => dispatch(add(data)),
    removefromcart: () => dispatch(remove())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);