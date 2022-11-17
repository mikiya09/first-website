import React from 'react'
import {SiGithub} from 'react-icons/si'
import {SiBilibili} from 'react-icons/si'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://github.com" target="_blank" rel="noreferrer"><SiGithub/></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><BsYoutube/></a>
            <a href="https://bilibili.com" target="_blank" rel="noreferrer"><SiBilibili/></a>
        </div>
    )
}

export default HeaderSocials
