import { Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader () {
    return <section className="p-4" style={{display: 'flex'}}>
            <section className="ml-30 mt-4 mb-4 p-5" style={{display: 'flex', borderRadius: '10px'}}>
                <section style={{margin: 'auto'}}>
                    <BurgerIcon type="primary" />
                </section>
                <section className="ml-2 mt-2">
                    <label >
                        <p className="text text_type_main-medium ">
                            Конструктор
                        </p>
                    </label>
                </section>
            </section>
            <section className="mt-4 mb-4 p-5 mr-30" style={{display: 'flex', textAlign: 'center'}}>
                <section style={{margin: 'auto'}} >
                    <ListIcon type="primary" />
                </section>
                <section className="ml-2 mt-2">
                    <label>
                        <p className="text text_type_main-medium">
                            Лента заказов
                        </p>
                    </label>
                </section>
            </section>
            <section className="p-5 mt-4 mb-4 mr-30" style={{display: 'flex'}}>
                <Logo />
            </section>
            <section className="mt-4 mb-4 p-5 ml-30" style={{display: 'flex'}}>
                <section style={{margin: 'auto'}} >
                    <ProfileIcon type="primary" />
                </section>
                <section className="ml-2 mt-2">
                    <label >
                        <p className="text text_type_main-medium">
                            Личный кабинет
                        </p>
                    </label>
                </section>
            </section>
        </section>
}
