import { assets } from "@/lib/db";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {
        const newAsset = await request.json();

        if (!newAsset.slug || !newAsset.name || !newAsset.value) {
            return NextResponse.json(
                {
                    message: 'Error adding asset',
                    received: 'Invalid data'
                },
                {
                    status: 400
                });
        }
        assets.push(newAsset);

        revalidateTag('ledger-updates', 'max');
        return NextResponse.json(
            {
                message: 'Asset Added',
                received: newAsset.name
            },
            {
                status: 201
            });

    } catch (error) {
        return NextResponse.json(
            {
                message: 'Error adding asset',
                received: error
            },
            {
                status: 500
            });
    }
}