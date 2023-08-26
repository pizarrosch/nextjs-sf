import Link from 'next/link';
import s from './Navigation.module.scss';
import {usePathname} from 'next/navigation';
import cx from 'clsx';

export default function Navigation() {

    const pathname = usePathname();

    return (
        <div className={s.root}>
            <nav>
                <ul className={s.root}>
                    <li className={cx({disabled: pathname === '/'})}>
                        <Link href="/">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            О компании
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}