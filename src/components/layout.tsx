'use client'

import { PropsWithChildren } from "react";
import Link from 'next/link';
import Head from "next/head";
import Navigation from "@/components/Navigation";
import s from './layout.module.scss';
import './globals.css';
import {useRouter} from "next/router";
import cx from 'clsx';
import './globals.css';
import {usePathname} from "next/navigation";

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
          <footer className={s.footer}>&copy; 2023 Web studio</footer>
        </div>
      </>
  );
}