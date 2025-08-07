import {createBem} from '@/utils/createBem'

import styles from './MobileMenuHeader.module.scss'

import UserLogo from '../../../public/images/icons/userlogo.svg'
import ButtonHeader from '../../components/button/ButtonHeader'
import { useState } from 'react'


const bem = createBem('mobileMenu', styles)

export default function MobileMenu ( {onClick } ) {
    return (
            <div className={bem()}>
                <ul className={bem("menuForMobile")}>
                    <li className={bem("item")}><a href="">Who we are</a></li>
                    <li className={bem("item")}><a href="">Contacts</a></li>
                    <li className={bem("item")}><a href="">Menu</a></li>
                </ul>

                <div className={bem("userBlockMobile")}>
                    <ButtonHeader onClick={onClick}></ButtonHeader>

                    <div className={bem("avatar")}>

                        <img src="../../../public/images/icons/userlogo.svg" alt="userlogo" />
                    </div>
                </div>
            </div>

    )

}