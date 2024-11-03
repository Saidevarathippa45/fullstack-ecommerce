import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Cart(){

    const [products,setProducts]=useState([]);
    const[totalAmount,setTotalAmount]=useState(0);
    
    useEffect(()=>{
        if(localStorage.getItem("cart-items")){
            setProducts(JSON.parse(localStorage.getItem("cart-items")));
            console.log(products)
            setTotalAmount(products.reduce((acc,_product)=>acc+_product.cartPrice,0))
            
        }
    },[])
    const removeFromCart=(productId)=>{
        const filteredCartItem=products.filter(product=> product.id !== productId)
        setProducts(filteredCartItem);
        setTotalAmount(filteredCartItem.reduce((acc,_product)=>acc+_product.cartPrice,0))
        localStorage.setItem("cart-items",JSON.stringify(filteredCartItem));
    }
    const onChangeQuantity=(type,index)=>{
       const temp=products.map((product,i)=>{
        if(index ===i){
           if(type === "increment"){
            product.Quantity += 1
            
           }else{
            product.Quantity -= 1
           }
           product.cartPrice=product.price*product.Quantity;
           return product
           
        }
        return product
    })
    setProducts(temp)
    setTotalAmount(temp.reduce((acc,_product)=>acc+_product.cartPrice,0))
    localStorage.setItem("cart-items",JSON.stringify(temp))
    
    }
   
    return(
        <div className="container">
            <div className="row" >
                <div className="col-sm">
                    
                    {products.length >0 ?
                    (
                        <div>
                            <div style={{marginBottom:"20px",textAlign:"end"}}><h5>TotalAmount:{totalAmount}</h5></div>
                            {products.map((product,index)=>(
                            <div className="row">
                            <div className="col-sm-4 my-2">
                                <img alt="imageSource" src={product.imgSrc}/>
                                
                            </div>
                            <div className="col-sm-5">
                                
                                <Link to={`/product-detailes/${product.id}`}><h5>{product.name}</h5></Link>
                                <ul>
                                    <li>{product.specification[0]}</li>
                                    <li>{product.specification[1]}</li>
                                    <li>{product.specification[2]}</li>
                                    <li>{product.specification[3]}</li>
                                    <li>{product.specification[4]}</li>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                            <h5>Price:{product.cartPrice}</h5>
                            <p>Quantity:<button className="btn btn-warning me-2" onClick={()=>onChangeQuantity("decrement",index)} disabled={product.Quantity===1}>-</button>{product.Quantity}<button className="btn btn-success ms-2" onClick={()=>onChangeQuantity("increment",index)}>+</button><br/></p>
                                <button style={{marginRight:"2px"}} className="btn btn-primary my-2">Buy now</button> 
                                <button className="btn btn-danger" onClick={()=>removeFromCart(product.id)}>Delete</button>
                            </div>
    
                        </div>
                        ))}
                        </div>
                    ):
                    (<div>
                        <h5>Your Cart is Empty</h5>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Cart;