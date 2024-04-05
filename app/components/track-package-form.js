import { getPackage } from "@/actions/package"
import { redirect } from 'next/navigation'
import Link from 'next/link'

const TrackPackageForm = async () => {
    const submit = async (data) => {
        "use server"

        const newPackage = await getPackage(Number(data.get('id')))
        redirect(`/package/${newPackage.id}`)
    }

    return (
        <form class="p-10 bg-white" action={submit}>
            <div class="">
                <label class="block text-sm text-gray-600" for="name">Identifiant du colis</label>
                <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="id" name="id" type="number" required=""/>
            </div>
            <div class="mt-6">
                <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default TrackPackageForm