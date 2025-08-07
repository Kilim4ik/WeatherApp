import {createBem} from '@/utils/createBem'

import styles from './ButtonHeader.module.scss'

const bem = createBem('buttonHeader', styles)


export default function buttonHeader ({ onClick }) {
    return <button className={bem()} onClick={onClick}>Sign Up</button>
}