"use server"

import Link from 'next/link'
import { getPackages, createPackage } from "@/actions/package"
import PackageList from "../components/all-package-list"
import Navbar from '../components/navbar'

const PackageManagment = async () => {
    return (
        <main>
            <Navbar />
            <PackageList />
        </main>
    )
}

export default PackageManagment