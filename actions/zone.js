"use server"

import prisma from "@/prisma/script"

export const getZones = async () => {
    return await prisma.zone.findMany({
        select: {
            id: true,
            name: true,
            packages: true
        }
    })
}
