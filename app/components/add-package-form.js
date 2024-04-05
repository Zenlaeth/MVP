"use server"

import { getPackages, createPackage } from "@/actions/package"
import { getZones } from "@/actions/zone"
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const AddPackageForm = async () => {
    const zones = await getZones()

    const submit = async (data) => {
        "use server"

        const newPack = await createPackage({
            departureAddress: data.get('departureAddress'),
            deliveryAddress: data.get('deliveryAddress'),
            weight: Number(data.get('weight')),
            zoneId: Number(data.get('zoneId'))
        })

        redirect('/managment')
    }

    return (
        <form class="p-10 bg-white" action={submit}>
            <div class="">
                <label class="block text-sm text-gray-600" for="departureAddress">Addresse de départ</label>
                <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="departureAddress" name="departureAddress" type="text" required=""/>
            </div>
            <div class="mt-2">
                <label class="block text-sm text-gray-600" for="deliveryAddress">Adresse de livraison</label>
                <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="deliveryAddress" name="deliveryAddress" type="text" required=""/>
            </div>
            <div class="mt-2">
                <label class="block text-sm text-gray-600" for="weight">Poids</label>
                <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="weight" name="weight" type="number" required=""/>
            </div>
            <div class="mt-2">
                <select name="zoneId" >
                    {
                        zones ? (
                            zones.map((zone) => (
                                <option key={zone.id} value={zone.id}>{zone.name}</option>
                            ))
                        ) : (
                            <option value="">Aucun utilisateur</option>
                        )
                    }
                </select>
            </div>
            <div class="mt-6">
                <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default AddPackageForm