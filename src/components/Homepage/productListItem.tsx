import { Link } from "react-router-dom"

type productprops = {
    product: {
        availableQuantity:number;
        product:{
            id:string
            price:string,
            quantity: number;
            productName: string;
            imageUrl:string;
        }
    };
}

function ProductListItem(props: productprops) {


    return (
       
        <div>
         
            <div className="card  shadow-2xl  border rounded-box">
                <figure className="px-10 pt-10 ">
                    <img src={props.product.product.imageUrl} className="rounded-xl max-w-6xl  " />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">{props.product.product.productName}</h2>
                    <div className="grid grid-cols-5 gap-4">
                       
                        <div className="col-start-1 col-end-3 ...">
                        <p className="text-lg"> Rs. {props.product.product.price}</p>
                        </div>
                        <div className="col-end-6 col-span-2 ...">
                        <p><div className="badge badge-accent">{props.product.availableQuantity }</div></p>
                        </div>
                       
                    </div>
                  
                    
                    <Link className="justify-center card-actions" to={`/view/${props.product.product.id}`}>
                        <button className="btn btn-outline btn-accent">More info</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default ProductListItem