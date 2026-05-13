import { assets } from "@/lib/db"
import { cacheLife, cacheTag } from 'next/cache';

export default async function Home() {
    'use cache';
    cacheLife('minutes');
    cacheTag('ledger-updates');

    return (
        <main className="p-6">
            <h1>The Void Ledger</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {assets.map((asset) => (
                    <div key={asset.slug} className="border p-4">
                        <h2>{asset.name}</h2>
                        <p>Value: ${asset.value}</p>
                        <p>Risk Level: {asset.riskLevel}</p>
                        <p>Owner: {asset.owner}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}
