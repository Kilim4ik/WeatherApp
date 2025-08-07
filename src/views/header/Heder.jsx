import {createBem} from '@/utils/createBem'

import styles from './Header.module.scss'
import Logo from '../../../public/images/icons/logo.svg'
import UserLogo from '../../../public/images/icons/userlogo.svg'
import ArrowOpen from '../../../public/images/icons/arrowOpen.svg'
import ArrowClose from '../../../public/images/icons/arrowClose.svg'


import ButtonHeader from '../../components/button/ButtonHeader'
import { useState } from 'react'

import MobileMenu from '../../components/mobileMenuHeader/MobileMenuHeader'
import SingUpModal from '../../components/singUpModal/SingUpModal'


const bem = createBem('header', styles)

export default function Header () {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const [showMenu, setShowMenu] = useState(false)



    const toggleMenuMobile = () => {
        setShowMenu(!showMenu)
    }

    const showModalFn = () => {
        setIsModalOpen(true)
    }

    const hideModalFn = () => {
        
        setIsModalOpen(false)

    }

    return (
        <header className={bem()}>
            <div className='container'>

            <div className={bem("headerWrapper")}>
                <div className={bem("headerBlock")}>
                    <div className={bem("logo")}>
                        <Logo/>
                    </div>

                    <nav className={bem("navigation")}>
                        <ul className={bem("menu")}>
                            <li className={bem("item")}><a href="">Who we are</a></li>
                            <li className={bem("item")}><a href="">Contacts</a></li>
                            <li className={bem("item")}><a href="">Menu</a></li>
                        </ul>
                    </nav>
                </div>


                <div >
                    <div className={bem("userBlockWrapper")}>
                        <div className={bem("userBlock")}>
                            <ButtonHeader onClick={showModalFn}></ButtonHeader>
                            <div className={bem("avatar")}>
                                <UserLogo></UserLogo>
                            </div>
                        </div>
                    </div>





                    <div className={bem('headerMenu')}>
                        <button className={bem('headerMenuBtn')} onClick={toggleMenuMobile}>
                            <div className={bem("buttonInsideBlock")}>
                                <p>Menu</p> 
                                <div className={bem('headerMenuArrow')}>
                                    {showMenu? <ArrowOpen></ArrowOpen> : <ArrowClose></ArrowClose>}
                                </div>

                            </div>

                        </button>
                    </div>
                </div>




            </div>




            </div>
            {isModalOpen && <SingUpModal onClick={hideModalFn}></SingUpModal>}


            {showMenu && <MobileMenu onClick={showModalFn}></MobileMenu>}


            

        </header>

    )
}