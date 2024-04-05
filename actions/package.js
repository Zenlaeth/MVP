"use server"

import prisma from "@/prisma/script"

export const getPackages = async () => {
    return await prisma.package.findMany({ 
        select: {
            id: true,
            departureAddress: true,
            deliveryAddress: true,
            weight: true,
            zoneId: true,
        }
    })
}

export const createPackage = async (pack) => {
    return await prisma.package.create({
        data: pack,
    })
}

export const getPackage = async (packageId) => {
    return await prisma.package.findUnique({
        where: {
            id: packageId,
        },
    })
}