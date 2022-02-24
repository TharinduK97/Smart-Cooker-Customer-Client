export interface IProduct {
        id: string;
        productName: string;
        description:string;
        price: number;
        quantity: number;
        imageUrl:string;
};

export interface ITransaction {
        id: string;
        createdAt: string;
        orderStatus: number;
        totalPrice: number;
        outlet:IOutlet;
};



export interface IOutlet {
        id: number;
        doorNumber: number;
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
    addresses?:Address[]
    
};



export interface IOutletProduct {
        availableQuantity: number;
        productId: string;
        product: IProduct;
    
};

export interface IOutletProducts {
        outletProducts:IOutletProduct[]
    
};

export interface IOrderproducts {
        quantity:number;
        product:IProduct;
    }