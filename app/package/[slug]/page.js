
import { getPackage, getPackages } from "@/actions/package"
import Navbar from "@/app/components/navbar"
import { redirect } from "next/dist/server/api-utils"
import { notFound } from 'next/navigation';

const Page = async ({ params }) => {
    "use server"

    const pack = await getPackage(Number(params.slug))
    if (pack == null) {
        notFound()
    }

    return (
        <div>
            <Navbar />
            <div className="container my-24 mx-auto md:px-6">
                    <h1 className="mb-6 text-3xl font-bold">
                        Colis n°{pack.id}
                    </h1>
                    <p>Addresse de départ : {pack.departureAddress}</p>
                    <p>Addresse de livraison : {pack.deliveryAddress}</p>
                    <p>Poids : {pack.weight}</p>
            </div>
        </div>
    )
}

export default Page