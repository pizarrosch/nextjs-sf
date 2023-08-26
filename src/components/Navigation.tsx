import Link from 'next/link';
import s from './Navigation.module.scss';

export default function Navigation() {

    return (
        <div className={s.root}>
            <Link href="/">
                Главная
            </Link>
            <Link href="/dashboard/about">
                О компании
            </Link>
            <Link href="/contacts">
                Контакты
            </Link>
            <Link href="/financials">
                Finance
            </Link>
        </div>
    );
}