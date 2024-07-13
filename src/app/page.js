"use client";
import Image from 'next/image';
import "./page.css";
import TextChanger from './TextChanger';
import icon from './icon.png'
import full_logo from './full_logo.png'
import full_black from './full_black.png'
import ig from './icons/ig.png';
import spotify from './icons/spotify.png';
import tt from './icons/tt.png';
import yt from './icons/yt.png';

export default function Home() {
  return (
    <main>
      <div className="main">
      <Image className='logo'
               src={full_black}
               alt="logo"
                width={600}
                height={600}
              />
      </div>
      <div className='rotating'>
      <TextChanger />
      </div>
      <div className='subtext'>
        check back soon besties
      </div>
      <div className='socials'>
      <a href="https://podcasters.spotify.com/pod/show/ltppod" target="_blank" rel="noreferrer">
            <Image className='icon'
               src={spotify}
               alt="spotify"
                width={40}
                height={40}
              />
              </a>
            <a href="https://instagram.com/losingtheplotpod" target="_blank" rel="noreferrer">
            <Image className='icon'
               src={ig}
               alt="ig"
                width={40}
                height={40}
              />
              </a>
            <a href="https://www.tiktok.com/@losingtheplotpod" target="_blank" rel="noreferrer">
            <Image className='icon'
               src={tt}
               alt="tt"
                width={40}
                height={40}
              />
              </a>
            <a href="https://www.youtube.com/@losingtheplotpodcast" target="_blank" rel="noreferrer">
            <Image className='icon'
               src={yt}
               alt="yt"
                width={40}
                height={40}
              />
              </a>
      </div>
    </main>
  );
}

