import React from 'react';
import Image from 'next/image';
import HomeImg from '../../../public/images/homePage.jpg';
import h1 from '../../../public/images/homeP2.jpg'
import h2 from '../../../public/images/homeP3.jpg'

import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Header = () => {
    return (
        <div className='relative h-[400px] w-full mt-10'>
            <Carousel autoplay>
                <h1 style={contentStyle}>
                    <Image src={HomeImg} alt='image' height={2000} width={2000} className='w-full h-full'></Image>
                </h1>
                <h1 style={contentStyle}>
                    <Image src={h1} alt='image' height={2000} width={2000} className='w-full h-full'></Image>
                </h1>
                <h1 style={contentStyle}>
                    <Image src={h2} alt='image' height={2000} width={2000} className='w-full h-full'></Image>
                </h1>
            </Carousel>
        </div>
    )
}

export default Header
