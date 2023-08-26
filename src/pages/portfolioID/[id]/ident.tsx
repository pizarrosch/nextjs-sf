import {PortfolioItem} from "@/pages/portfolio";
import Layout from "@/components/layout";
import Image from 'next/image';
import Link from "next/link";

interface ItemProps {
    portfolioItem: PortfolioItem;
}


export default function Item({ portfolioItem }: ItemProps) {
    return (
        <Layout>
            <div>
                <h1>Проект: {portfolioItem.title}</h1>
                <Image
                    src={portfolioItem.url}
                    width={400}
                    height={400}
                    alt={portfolioItem.title} />
                <Link href="/src/pages/portfolioID">Назад к списку работ</Link>
            </div>
        </Layout>
    )
}