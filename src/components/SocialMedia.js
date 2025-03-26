import React from 'react';
import { InstagramLogo, DiscordLogo } from '@phosphor-icons/react';

const SocialMedia = () => {
  const socialLinks = [
    { icon: DiscordLogo, href: 'https://discord.gg/nibloofinds', label: 'Discord' },
    { icon: InstagramLogo, href: 'https://instagram.com/nibloofinds', label: 'Instagram' },
    { 
      icon: () => (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 448 512"
          fill="currentColor"
        >
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
        </svg>
      ),
      href: 'https://tiktok.com/@nibloofinds',
      label: 'TikTok'
    }
  ];

  return (
    <div className="social-media">
      <div className="social-links">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={label}
          >
            {typeof Icon === 'function' ? <Icon /> : <Icon size={20} weight="duotone" />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia; 