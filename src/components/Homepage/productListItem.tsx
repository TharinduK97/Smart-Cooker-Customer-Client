import { Link } from "react-router-dom"

type productprops = {
    product: {
        product_code: number;
        product_name: string;
        price: number;
        quantity: number;
        last_updated: string;
        productDescription: string;
        productImage: string;
    };
}

function ProductListItem(props: productprops) {


    return (
        <div>
            <div className="card  shadow-2xl ">
                <figure className="px-10 pt-10 ">
                    <img src={props.product.productImage} className="rounded-xl max-w-6xl  " />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">{props.product.product_name}</h2>
                    <div className="grid grid-cols-5 gap-4">
                       
                        <div className="col-start-1 col-end-3 ...">
                        <p className="text-lg"> Rs. {props.product.price}</p>
                        </div>
                        <div className="col-end-6 col-span-2 ...">
                        <p>Quantity - {props.product.quantity}</p>
                        </div>
                       
                    </div>
                  
                    
                    <Link className="justify-center card-actions" to={`/${props.product.product_code}`}>
                        <button className="btn btn-outline btn-accent">More info</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default ProductListItem