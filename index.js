const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>Items: {props.items}</p>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {
  items: 0
}
//defaultProps -> se coloca los datos que desea colocar de default
