export interface IProduct {
        product_code: number;
        product_name: string;
        price: number;
        quantity: number;
        last_updated: string;
        productDescription:string;
        productImage:string;
};

export interface ITransaction {
        order_ID: number;
        product_name: string;
        price: number;
        quantity: number;
        Created_at: string;
        productImage:string;
};

export interface IOutlet {
        outlet_id: number;
        door_number: number;
        street: string;
        city: string;
};