import {createBem} from '@/utils/createBem'

import styles from './MobileMenuHeader.module.scss'

import UserLogo from '../../../public/images/icons/userlogo.svg'
// import ButtonHeader from '../../components/button/ButtonHeader'
import { useState } from 'react'


const bem = createBem('mobileMenu', styles)

export default function MobileMenu ( {onClick, isOpen} ) {



    return (
            <div className={`${bem()} ${isOpen ? bem('show') : ""}`} >
                <ul className={bem("menuForMobile")}>
                    <li className={bem("item")}><a href="">Who we are</a></li>
                    <li className={bem("item")}><a href="">Contacts</a></li>
                    <li className={bem("item")}><a href="">Menu</a></li>
                </ul>

                <div className={bem("userBlockMobile")}>


                    <div className={bem("avatar")}>
                        {/* <UserLogo></UserLogo> */}
                        <img src="../../../public/images/icons/userlogo.svg" alt="userlogo" />
                    </div>

                    <button onClick={onClick} className={bem('buttonMenu')}>Sign Up</button>


                </div>
            </div>

    )

}