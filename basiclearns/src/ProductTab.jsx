import Products from "./Products";

function ProductTab (){
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", 
    alignItems: "center"
  };
  
    return (
        <div style={styles} > 
         <Products title="Logistech mx master" idx={0} />
           <Products title="Apple pencil (2nd zen "  idx={1} />
           <Products title="petronics "  idx={2}/>
           <Products  title="books "  idx={3}/>
        </div>
    )
}
export default ProductTab;


 // let options =["hi-tech","durable","fast"];
    // let options3 = [<li> "hi-tech"</li> , <li>"durable"</li>, <li>"fast"</li>] ;
    // let options2 ={a:"hi-tech",b:"durable", c:"fast"};
       
        {/* <Products title ="phone"
         price={20000} 
        //  features ={options}
        //  features2={["hi-tech","durable"]}
        //  features3={{a:"hi-tech"}}
        //  features2={["hi-tech","durable"]} /// dyrect array or object bhi pass krsakte hai
        // features={options}
          /> */}