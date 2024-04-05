"use server"

import { getPackages, createPackage } from "@/actions/package"
import { getZone, getZones } from "@/actions/zone"
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const AddPackageForm = async () => {
    const zones = await getZones()

    const submit = async (data) => {
        "use server"
        const zoneId = Number(data.get('zoneId'))
        const zone = await getZone(zoneId)

        if (zone.stockLimit == zone.packages.length) {
            console.log("Espace indiponible dans " + zone.name)
        } else {
            const newPack = await createPackage({
                departureAddress: data.get('departureAddress'),
                deliveryAddress: data.get('deliveryAddress'),
                weight: Number(data.get('weight')),
                zoneId: zoneId
            })

            redirect('/managment')
        }
    }

    return (
        <form className="p-10 bg-white" action={submit}>
            <div className="">
                <label className="block text-sm text-gray-600" htmlFor="departureAddress">Addresse de départ</label>
                <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="departureAddress" name="departureAddress" type="text" required=""/>
            </div>
            <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="deliveryAddress">Adresse de livraison</label>
                <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="deliveryAddress" name="deliveryAddress" type="text" required=""/>
            </div>
            <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="weight">Poids</label>
                <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="weight" name="weight" type="number" required=""/>
            </div>
            <div className="mt-2">
                <select name="zoneId" >
                    {
                        zones ? (
                            zones.map((zone) => (
                                <option key={zone.id} value={zone.id}>{zone.name}</option>
                            ))
                        ) : (
                            <option value="">Aucune zone</option>
                        )
                    }
                </select>
            </div>
            <div className="mt-6">
                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default AddPackageForm