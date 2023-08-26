import { PropsWithChildren } from "react";
import Link from 'next/link';
import Head from "next/head";
import Navigation from "@/components/Navigation";
import s from './layout.module.scss';
import cx from 'clsx';
import {usePathname} from "next/navigation";
import {FOOTER_EMAIL} from '../../const';

export default function Layout({ children }: PropsWithChildren) {

    const pathname = usePathname();

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
                  <div className={cx (
                      s.logo,
                      {disabled: pathname === "/"}
                  )}>
                      <Link href={'/'}>
                        WEBSTUDIO
                      </Link>
                  </div>
            <Navigation />
          </header>
          <main className={s.main}>{children}</main>
          <footer className={s.footer}>
            <div>&copy; 2023 Web studio</div>
            <a href={`mailto: ${FOOTER_EMAIL}`}>{FOOTER_EMAIL}</a>
          </footer>
        </div>
      </>
  );
}