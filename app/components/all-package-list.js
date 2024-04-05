import { getPackage, getPackages } from "@/actions/package"
import FindPackageForm from "./track-package-form"
import { getZones } from "@/actions/zone"

const PackageList = async () => {
    const zones = await getZones()
    
    return (
        <div>
            <main className="w-full flex-grow p-6">
                <div className="w-full mt-6">
                    <p className="text-xl pb-3 flex items-center">
                        <i className="fas fa-list mr-3"></i> Gestion des colis
                    </p>
                    {
                        zones.map((zone) => (
                            <div key={zone.id} className="mb-7">
                                <p className="text-xl pb-3 flex items-center">
                                    <i className="fas fa-list mr-3"></i>{zone.name} 
                                </p>
                                {zone.stockLimit - zone.packages.length > 0 ? (
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Espace disponible : <b>{zone.stockLimit - zone.packages.length}</b></span>
                                    </span>
                                ) : (
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Espace indisponible</span>
                                    </span>
                                )}
                                <div className="bg-white overflow-auto">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Colis
                                                </th>
                                                <th
                                                    className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Addresse de départ
                                                </th>
                                                <th
                                                    className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Addresse de livraison
                                                </th>
                                                <th
                                                    className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Poids
                                                </th>
                                                <th
                                                    className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                zone.packages ? (
                                                    zone.packages.map((pack) => (
                                                        <tr key={pack.id}>
                                                            <td className="px-5 py-5 bg-white text-sm">
                                                                <div className="flex items-center">
                                                                    <div className="flex-shrink-0 w-10 h-10">
                                                                        <img className="w-full h-full rounded-full"
                                                                            src="https://img.freepik.com/vecteurs-libre/colis-boite-livraison-3d_78370-825.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="ml-3">
                                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                                            Colis n°{pack.id}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-3 py-5 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{pack.departureAddress}</p>
                                                            </td>
                                                            <td className="px-3 py-5 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{pack.deliveryAddress}</p>
                                                            </td>
                                                            <td className="px-3 py-5 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{pack.weight}</p>
                                                            </td>
                                                            <td className="px-3 py-5 bg-white text-sm">
                                                                <span
                                                                    className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                                    <span aria-hidden
                                                                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                                    <span className="relative">En attente</span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr></tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default PackageList