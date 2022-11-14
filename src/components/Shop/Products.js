import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const dummy_product = [
    {
      id: "p1",
      price: 10,
      title: "first book",
      description: "this is my first book",
    },
    {
      id: "p2",
      price: 20,
      title: "second book",
      description: "this is my second book",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_product.map((product)=>(
           <ProductItem
           key={product.id}
           id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />)
        )}
       
      </ul>
    </section>
  );
};

export default Products;
