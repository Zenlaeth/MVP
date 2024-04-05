import { getPackage, getPackages } from "@/actions/package"
import FindPackageForm from "./track-package-form"
import { getZones } from "@/actions/zone"

const PackageList = async () => {
    const zones = await getZones()
    
    return (
        <div>
            <main class="w-full flex-grow p-6">
                <div class="w-full mt-6">
                    <p class="text-xl pb-3 flex items-center">
                        <i class="fas fa-list mr-3"></i> Gestion des colis
                    </p>
                    {
                        zones.map((zone) => (
                            <div key={zone.id} class="mb-7">
                                <p class="text-xl pb-3 flex items-center">
                                    <i class="fas fa-list mr-3"></i>{zone.name} 
                                </p>
                                <span
                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden
                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span class="relative">Espace disponible</span>
                                </span>
                                <div class="bg-white overflow-auto">
                                    <table class="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    User
                                                </th>
                                                <th
                                                    class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Addresse de départ
                                                </th>
                                                <th
                                                    class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Addresse de livraison
                                                </th>
                                                <th
                                                    class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Poids
                                                </th>
                                                <th
                                                    class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                zone.packages ? (
                                                    zone.packages.map((pack) => (
                                                        <tr key={pack.id}>
                                                            <td class="px-5 py-5 bg-white text-sm">
                                                                <div class="flex items-center">
                                                                    <div class="flex-shrink-0 w-10 h-10">
                                                                        <img class="w-full h-full rounded-full"
                                                                            src="https://img.freepik.com/vecteurs-libre/colis-boite-livraison-3d_78370-825.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div class="ml-3">
                                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                                            Colis n°{pack.id}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-3 py-5 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">{pack.departureAddress}</p>
                                                            </td>
                                                            <td class="px-3 py-5 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">{pack.deliveryAddress}</p>
                                                            </td>
                                                            <td class="px-3 py-5 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">{pack.weight}</p>
                                                            </td>
                                                            <td class="px-3 py-5 bg-white text-sm">
                                                                <span
                                                                    class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                                    <span aria-hidden
                                                                        class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                                    <span class="relative">En attente</span>
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