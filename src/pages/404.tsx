import Layout from "@/components/layout";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Error() {
    const router = useRouter();
    const {financials, about, contacts} = router.query;

    useEffect(() => {
        if (financials) {
            router.push('/financials')
        } else if (about) {
            router.push('/about')
        } else if (contacts) {
            router.push('/contacts')
        } else {
            router.push('/404')
        };
    }, [financials, about, contacts]);

    return (
        <Layout>
            <div>Sorry, page not found bliaaa</div>
        </Layout>)
}