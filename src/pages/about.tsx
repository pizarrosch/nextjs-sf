import Layout from "@/components/layout";
import Image from "next/image";
import s from './about.module.scss';
import _Kz8nHVg from '../../public/assets/arlington-research-Kz8nHVg_tGI-unsplash.jpg';
import _g1Kr4Ozfoac from '../../public/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
import _5fNmWej4tAA from '../../public/assets/scott-graham-5fNmWej4tAA-unsplash.jpg';

export default function About() {
    return (
    <Layout>
        <h1>О компании</h1>
        <div className={s.container}>
            <p>
                <p>
                    Lorem ipsum dolor sit amet. Ut vitae sint non quia nesciunt aut reiciendis saepe. Qui beatae
                    praesentium id omnis ratione ut fuga accusantium ut autem nihil ut quis odit et ullam magni et quos
                    nostrum. Qui minima cupiditate qui provident numquam vel atque quia. Et animi dolores qui voluptate
                    suscipit aut consequatur voluptas et distinctio odio et maiores veritatis ab ipsa alias vel omnis
                    minus.
                </p>
                <p>
                    Sed excepturi officiis aut architecto provident ut esse vitae et saepe illo quo corrupti cumque est
                    adipisci dolor qui impedit molestias. Cum illo quibusdam et optio delectus sit consequuntur
                    molestiae et fugit culpa qui nihil sint eum nobis omnis At nostrum debitis. Eum quia excepturi et
                    officia deserunt id aliquam nesciunt et quos consequatur. Et laudantium rerum et veritatis officia
                    est necessitatibus cupiditate qui quasi assumenda aut nobis ducimus.
                </p>
                <p>
                    Ut ducimus cumque quo sunt velit a blanditiis magni. Non distinctio perspiciatis 33 molestias
                    tempora qui consequatur dolorem quo modi tempore. Est totam aliquam est voluptates odio ea magni
                    consequatur non sequi suscipit.
                </p>

            </p>
            <h2>Наш коллектив</h2>
        </div>
        <div className={s.list}>
            <div className={s.item}>
                <h3>Отдел маркетинга</h3>
                <div className={s.content}>
                    <Image
                        className={s.image}
                        src={_Kz8nHVg}
                        alt={'https://unsplash.com/photos/Kz8nHVg_tGI'}
                    />
                    <div>
                        <p>
                            One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his
                            bed into a horrible vermin.
                        </p>
                        <p>
                            He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                            slightly domed and divided by arches into stiff sections.
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.item}>
                <h3>Инженеры-разработчики</h3>
                <div className={s.content}>
                    <Image
                        className={s.image}
                        src={_g1Kr4Ozfoac}
                        alt={'https://unsplash.com/photos/g1Kr4Ozfoac'}
                    />
                    <div>
                        <p>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
                            spring which I enjoy with my whole heart.
                        </p>
                        <p>
                            I am alone, and feel the charm of existence in this spot, which was created for the bliss
                            of souls like mine. I am so happy, my
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.item}>
                <h3>Отдел продаж</h3>
                <div className={s.content}>
                    <Image
                        className={s.image}
                        src={_5fNmWej4tAA}
                        alt={'https://unsplash.com/photos/5fNmWej4tAA'}
                    />
                    <div>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean. A small river named Duden flows by their place and
                            supplies it with the necessary
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    );
}