import React from 'react'
import {SiGithub} from 'react-icons/si'
import {SiBilibili} from 'react-icons/si'
import {BsYoutube} from 'react-icons/bs'
import {AiOutlineWechat} from 'react-icons/ai'
import {FaBloggerB} from 'react-icons/fa' 

import './header.css'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            {/* <a href="https://github.com" target="_blank" rel="noreferrer"><SiGithub/></a> */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="github-icon"><SiGithub size={27}/></a>
            <a href="https://bilibili.com" target="_blank" rel="noreferrer" className="youtube-icon"><BsYoutube size={27}/></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bilibili-icon"><SiBilibili size={27}/></a>
            {/* pop out window showing CR code maybe */}
            <a href="https://web.wechat.com/?lang=it" className="wechat-icon"><AiOutlineWechat size={27}/></a>
            <a href="https://google.com" className="blog-icon"><FaBloggerB size={27}/></a>
        </div>
    )
}

export default HeaderSocials
