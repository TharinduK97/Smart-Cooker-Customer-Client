import moment from "moment";
import { Link } from "react-router-dom";

type transactionprops = {
   num:number;
    transaction: {
        
        id: number;
        orderStatus: string;
        totalPrice: number;
        outlet: {
            city: string;
            doorNumber: number;
            id: string;
            street: string;
        };
        createdAt: string;


    };
}





function TransactionsItem(props: transactionprops) {

    function OrderStatus(status: any) {
        var oStatus;
        switch (status) {
            case 0:
                oStatus = "Pending";
                break;
            case 1:
                oStatus = "Complete";
                break;
            default:
                oStatus = "Cancel";
        }
        return oStatus;
    }

    return (

        <tr >
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">

                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{props.num}</div>

                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{OrderStatus(props.transaction.orderStatus)}</div>

            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {props.transaction.outlet.city}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{moment(props.transaction.createdAt).format('MM/DD/YYYY')}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. {props.transaction.totalPrice}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link to={`/transactions/${props.transaction.id}`} className="text-indigo-600 hover:text-indigo-900">
                    More
                </Link>
            </td>
        </tr>

    )
}

export default TransactionsItem
