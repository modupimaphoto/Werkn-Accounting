import menu from './assets/img/menu.svg';
import strike_cross from './assets/img/strike_cross.svg';

const Header = () => {

    const showNavigation = () => {
        const navigation = document.querySelector('.navigation');
        navigation.classList.toggle('active-nav');
    }
    const hideNavigation = () => {
        const navigation = document.querySelector('.navigation');
        navigation.classList.toggle('active-nav');
    }

    return(
        <header>
            <div className='container d-md-flex justify-content-between p-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h4'>
                        Werkn
                    </div>
                    <div className='menu'>
                        <img src={ menu } alt='menu' onClick={ showNavigation }/>
                    </div>
                </div>
                <div className='navigation active-nav'>
                    <img src={ strike_cross } alt='cross' className='cross' onClick={ hideNavigation }/>
                    <ul>
                        <li className=' d-md-inline-block'>
                            <a href='#services' className='text-decoration-none p-md-4'>Services</a>
                        </li>
                        <li className=' d-md-inline-block'>
                            <a href='#pricing' className='text-decoration-none p-md-4'>Pricing</a>
                        </li>
                        <li className=' d-md-inline-block'>
                            <a href='#contact' className='text-decoration-none pmd-4'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;