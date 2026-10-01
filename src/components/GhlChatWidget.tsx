import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config/siteConfig';

interface GhlChatWidgetProps {
  isModalOpen: boolean;
}

export const GhlChatWidget: React.FC<GhlChatWidgetProps> = ({ isModalOpen }) => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  const isThankYouPage = location.pathname === '/thank-you' || location.pathname === '/obrigado';
  const shouldHide = isThankYouPage || isModalOpen;

  // 1. Lazy load script on first interaction or after 6 seconds
  useEffect(() => {
    if (isLoaded) return;

    let timeoutId: NodeJS.Timeout;

    const loadScript = () => {
      if (document.querySelector('script[data-ghl-chat="true"]')) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.async = true;
      script.setAttribute('data-ghl-chat', 'true');
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', SITE.integrations.ghlChatWidgetId);
      
      script.onload = () => {
        setIsLoaded(true);
      };

      document.body.appendChild(script);

      // Clean up event listeners once triggered
      window.removeEventListener('scroll', loadScript);
      window.removeEventListener('touchstart', loadScript);
      window.removeEventListener('keydown', loadScript);
      window.removeEventListener('mousemove', loadScript);
      clearTimeout(timeoutId);
    };

    // Listen to first user interaction
    window.addEventListener('scroll', loadScript, { passive: true, once: true });
    window.addEventListener('touchstart', loadScript, { passive: true, once: true });
    window.addEventListener('keydown', loadScript, { passive: true, once: true });
    window.addEventListener('mousemove', loadScript, { passive: true, once: true });

    // Fallback: timer 6 seconds
    timeoutId = setTimeout(loadScript, 6000);

    return () => {
      window.removeEventListener('scroll', loadScript);
      window.removeEventListener('touchstart', loadScript);
      window.removeEventListener('keydown', loadScript);
      window.removeEventListener('mousemove', loadScript);
      clearTimeout(timeoutId);
    };
  }, [isLoaded]);

  // 2. Hide widget when on /thank-you or when modal is open
  useEffect(() => {
    const applyVisibility = () => {
      const widgetElements = document.querySelectorAll<HTMLElement>(
        'chat-widget, [data-chat-widget], #leadconnector-chat-widget, iframe[src*="chat-widget"], #chat-widget-container'
      );

      widgetElements.forEach((el) => {
        if (shouldHide) {
          el.style.setProperty('display', 'none', 'important');
          el.style.setProperty('visibility', 'hidden', 'important');
          el.style.setProperty('pointer-events', 'none', 'important');
        } else {
          el.style.removeProperty('display');
          el.style.removeProperty('visibility');
          el.style.removeProperty('pointer-events');
        }
      });
    };

    applyVisibility();
    const interval = setInterval(applyVisibility, 300);
    return () => clearInterval(interval);
  }, [shouldHide, isLoaded]);

  return null;
};
