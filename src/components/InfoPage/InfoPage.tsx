import s from './InfoPage.module.css'

function InfoPage() {
    return (
        <div className={s.container}>
            <h1 className={s.title}>
                Hello, here you can add your todo list online
            </h1>
            <h2 className={s.subTitle}>Developed by Naumenko Liliana</h2>
            <p>You can contact with me here:</p>
            <ul className={s.list}>
                <li className={s.listItem}>
                    <a
                        href="https://t.me/kiev_yanochka"
                        target="_blank"
                        rel="noreferrer"
                        className={s.link}
                    >
                        Telegram
                    </a>
                </li>
                <li className={s.listItem}>
                    <a
                        href="https://www.instagram.com/kiev__lyanochka/"
                        target="_blank"
                        rel="noreferrer"
                        className={s.link}
                    >
                        Instagram
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default InfoPage
