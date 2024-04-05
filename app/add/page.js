"use server"

import AddPackageForm from "../components/add-package-form"
import Navbar from "../components/navbar"

const AddPackage = async () => {
    return (
        <main>
            <Navbar />
            <AddPackageForm />
        </main>
    )
}

export default AddPackage