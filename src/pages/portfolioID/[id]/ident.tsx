import {PortfolioItem} from "@/pages/portfolio";
import Layout from "@/components/layout";
import Image from 'next/image';
import Link from "next/link";
import axios from "axios";
import s from './ident.module.scss';

interface ItemProps {
    portfolioItem: PortfolioItem;
}

const PHOTOS_API_URL = 'https://jsonplaceholder.typicode.com/photos';

export async function getServerSideProps({ params }) {
  const url = `${PHOTOS_API_URL}/${params.id}`
  const { data } = await axios.get<PortfolioItem[]>(url);

  return {
    props: { portfolioItem: data }
  }
}

export default function Item({ portfolioItem }: ItemProps) {
    return (
        <Layout>
            <div className={s.root}>
                <h1 className={s.title}>Проект: {portfolioItem.title}</h1>
                <Image
                    src={portfolioItem.url}
                    width={400}
                    height={400}
                    alt={portfolioItem.title} />
                <Link href="/portfolio">
                  <div className={s.returnButton}>Назад к списку работ</div>
                </Link>
            </div>
        </Layout>
    )
}