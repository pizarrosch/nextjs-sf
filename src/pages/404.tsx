// import Layout from "@/components/layout";
// import {useEffect} from "react";
// import {useRouter} from "next/router";
//
// export default function Error() {
//     const router = useRouter();
//     const {about, contacts, portfolio} = router.query;
//
//     useEffect(() => {
//          if (about) {
//             router.push('/about')
//         } else if (contacts) {
//             router.push('/contacts')
//         } else if (portfolio) {
//             router.push(`/portfolioID/id`)
//         } else {
//             router.push('/404')
//         }
//     }, [about, contacts, portfolio]);
//
//     return (
//         <Layout>
//             <div>Sorry, page not found bliaaa</div>
//         </Layout>)
// }

export default function fourOfour() {
    return <div>404 - Page not found</div>;
}