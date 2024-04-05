"use server"

import Navbar from "../components/navbar"
import TrackPackageForm from "../components/track-package-form"
import Link from 'next/link'

const TrackPackage = async () => {
    return (
        <main>
            <Navbar />
            <TrackPackageForm />
        </main>
    )
}

export default TrackPackage