import Layout from "@/components/layout";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Error() {
    const router = useRouter();
    const {financials, about, contacts, portfolioID} = router.query;

    useEffect(() => {
        if (financials) {
            router.push('/portfolioID')
        } else if (about) {
            router.push('/about')
        } else if (contacts) {
            router.push('/contacts')
        } else if (portfolioID) {
            router.push(`/portfolioID/id`)
        } else {
            router.push('/404')
        }
    }, [financials, about, contacts, portfolioID]);

    return (
        <Layout>
            <div>Sorry, page not found bliaaa</div>
        </Layout>)
}