export interface IProduct {
        id: string;
        productName: string;
        description:string;
        price: number;
        quantity: number;
        imageUrl:string;
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
export interface Address {
        id: string;
        doorNumber: string;
        street: string;
        city: string;
};

export interface IProfile {
        id: string;
    email: string,
    firstName: string,
    lastName: string,
    nic: string,
    addresse: {
        id: string;
        doorNumber: string;
        street: string;
        city: string;
    }[]
    
};