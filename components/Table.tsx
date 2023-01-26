import { HiCheck } from "react-icons/hi2"
import { Product } from "@stripe/firestore-stripe-payments"

interface Props {
    products: Product[]
    selectedPlan: Product
}

function Table({products, selectedPlan}: Props) {
  return (
    <table>
        <tbody className="divide-y divide-[gray]">
            <tr className="tableRow">
                <td className="tableDataTitle">Monthly price</td>
                {products.map((product) => (
                    <td
                        className={`tableDataFeature ${selectedPlan?.id === product.id
                        ? 'text-[#E50914]': 'text-[gray]'}`}
                        key={product.id}
                    >
                        USD {product.prices[0].unit_amount! / 100}
                    </td>
                ))}
            </tr>

              <tr className="tableRow">
                <td className="tableDataTitle">Video quality</td>
                {products.map((product) => (
                    <td
                        className={`tableDataFeature ${selectedPlan?.id === product.id
                        ? 'text-[#E50914]': 'text-[gray]'}`}
                        key={product.id}
                    >
                        {product.metadata.videoQuality}
                    </td>
                ))}
            </tr>
        </tbody>
    </table>
  )
}

export default Table