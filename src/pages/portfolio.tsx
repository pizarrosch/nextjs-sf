import Layout from "@/components/layout";
import {useEffect, useState} from "react";
import s from './portfolio.module.scss';
import Image from "next/image";
import {useRouter} from "next/router";
import Item from "@/pages/portfolioID/[id]/ident";
import Link from 'next/link';

export interface PortfolioItem {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

type ItemsByGroup = [string, PortfolioItem[]][];
const PHOTOS_API_URL = 'https://jsonplaceholder.typicode.com/photos';

export default function Portfolio() {

    const [loading, setLoading] = useState(true);
    const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);
    const router = useRouter();

    const load = () => {
        console.log('Loading content')
        fetch(PHOTOS_API_URL)
            .then(response => response.json())
            .then((data) => {
                const slicedData = data.slice(0, 7);
                setItems([["Корпоратив", slicedData]]);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        load();
    }, []);

        if (loading) {
            return (
                <Layout>
                    ...loading
                </Layout>
            )
        } else {
            return (
                <Layout>
                    <h1>Наши работы</h1>

                    {itemsByGroup?.length ? (
                        <div>
                            {itemsByGroup.map((group, index) => {
                                console.log(group[1])
                                return <div key={index} className={s.groupWrapper}>
                                    <h2>{group[0]}</h2>
                                    <div className={s.listGroup}>
                                        {group[1].map(({id, title, thumbnailUrl, url}) => {
                                            return (
                                              <div key={id} className={s.groupItem} onClick={() => router.push(`/portfolioID/${id}/ident`)}>
                                                  <Image src={thumbnailUrl} alt={title} width={150} height={150}/>
                                                  <h3>{title}</h3>
                                              </div>
                                              )
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    ) : <div>Data not found</div>}
                </Layout>
            )
        }
}