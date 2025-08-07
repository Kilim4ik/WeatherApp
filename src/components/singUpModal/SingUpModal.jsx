import {createBem} from '@/utils/createBem'
import styles from './SingUpModal.module.scss'

import { useState } from 'react'
import ButtonHeader from '../../components/button/ButtonHeader'

const bem = createBem('modal', styles)


export default function SingUpModal ( {onClick} ) {
    return (
        <div className={bem('overlay')} onClick={onClick}>
            <div className={bem()}  onClick={(e) => e.stopPropagation()}>
                <h2 className={bem('title')}>Sign up</h2>
                <form className={bem('form')}>
                    <label className={bem('label')}>
                        Username:
                        <input className={bem('input')} name="name" placeholder='Username'/>
                    </label>
                    <label className={bem('label')}>
                        E-mail:
                        <input className={bem('input')} name="name" placeholder='E-mail' />
                    </label>

                    <label className={bem('label')}>
                        Password:
                        <input className={bem('input')} name="name" placeholder='Password' />
                    </label>

                </form>
                <div className={bem('btn')}>
                    <ButtonHeader></ButtonHeader>

                </div>
                <p className={bem('text')}>Already have an account? <a href='' className={bem('loginLink')}>Log in</a></p>
            </div>

        </div>

    )
}
