import './Products.css';
import Price from "./Price";

function Products({ title, idx }) {
  let oldPrice = ["12,495", "34,343", "432,433", "635,343"];
  let newPrice = ["24,495", "74,343", "898,433", "1265,281,12"];
  let description = [
    ["8000 Dpi", "5 programmable button"],
    ["Intuitive surface", "Design for iPad"],
    ["Design for any", "Intuitive surfaces"],
    ["Readings", "optical orientation"]
  ];

  return (
    <div className="Product">
      <p>{title}</p>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

    // // // Dynamicle styles // //
    // let styles ={ backgroundColor: price > 30000 ? "pink":null };
    // let isDiscount =price > 30000
    //    return (
    //     <div className="Product" style={styles} >
    //         <h3>{title}</h3>
    //         <h5>Price :{price}</h5>
    //         { price > 30000 && <p>Discount of 5% </p> }
           
    //     </div>
    // )

    // // //  COnditions Many types  // //
    // // let isDiscount = price > 30000 ? "Discount of 5%" : "";
    // // const list =features.map((feature) =><li>{feature}</li> ) ;
    // // if (price > 30000) {
    // //     return (
    // //         <div className="Product">
    // //             <h3>{title}</h3>
    // //             <h5>Price :{price}</h5>
    // //             <p>Discount of 5%</p>
    // //         </div>
    // //     )
        
    // // }else{
    // //     return (
    // //         <div className="Product">
    // //             <h3>{title}</h3>
    // //             <h5>Price :{price}</h5>
    // //         </div>
    // //     )
    // // }
    // //// to other ways 
    // return (
    //     <div className="Product">
    //         <h3>{title}</h3>
    //         <h5>Price :{price}</h5>
    //         {price > 30000 && <p>Discount of 5% </p> }
    //         {/* <p>{price > 30000 ? "Discount of 5%" : ""}</p> */}
    //         {/* {price > 30000 ? <p>  "Discount of 5%" </p> : <a href="/#">Get discount </a> } */}
    //     </div>
    // )
  
export default Products;