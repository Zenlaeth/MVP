"use server"

import prisma from "@/prisma/script"

export const getZones = async () => {
    return await prisma.zone.findMany({
        select: {
            id: true,
            name: true,
            packages: true,
            stockLimit: true
        }
    })
}

export const getZone = async (zoneId) => {
    return await prisma.zone.findUnique({
        where: {
            id: zoneId,
        },
        select: {
            id: true,
            name: true,
            packages: true,
            stockLimit: true
        }
    })
}
