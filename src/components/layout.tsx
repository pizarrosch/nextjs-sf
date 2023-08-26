import { PropsWithChildren } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import s from './layout.module.scss';
import '../app/globals.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
      <>
        <Head>
          <title>Web Studio</title>
          <meta name="description" content="SkillFactory Next.js project" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/web-studio/src/app/favicon.ico" />
        </Head>

        <div className={s.container}>
          <header className={s.header}>
            <div>Logo</div>
            <Navigation />
          </header>
          <main className={s.main}>{children}</main>
          <footer className={s.footer}>&copy; 2023 Web studio</footer>
        </div>
      </>
  );
}