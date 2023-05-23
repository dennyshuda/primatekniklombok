import { products } from "../../data";
import { formatMoney } from "../../utils";

export default function TablePrice() {
  return (
    <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h3 className="mb-2 md:text-xl font-bold dark:text-white">
        DAFTAR HARGA SEWA GENSET SILENT
      </h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-primary-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                DAYA(KVA)
              </th>
              <th scope="col" className="px-6 py-3">
                1 HARI
              </th>
              <th scope="col" className="px-6 py-3">
                1 MINGGU
              </th>
              <th scope="col" className="px-6 py-3">
                1 BULAN
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.power}
                  </th>
                  <td className="px-6 py-4">{formatMoney(product.perDay)}</td>
                  <td className="px-6 py-4">{formatMoney(product.perWeek)}</td>
                  <td className="px-6 py-4">{formatMoney(product.perMonth)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
