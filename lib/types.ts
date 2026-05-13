export interface Asset {
    slug: string;
    name: string;
    value: number;
    riskLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
    owner: string;
}