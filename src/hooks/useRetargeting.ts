import { useEffect } from 'react';

const useRetargeting = () => {
  useEffect(() => {
    // Função para criar pixel de retargeting
    const createRetargetingPixel = (pixelId: string) => {
      // Facebook Pixel
      if (pixelId.startsWith('fb_')) {
        const script = document.createElement('script');
        script.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(script);
      }

      // Google Ads Pixel
      if (pixelId.startsWith('gtag_')) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${pixelId}`;
        document.head.appendChild(script);

        const gtagScript = document.createElement('script');
        gtagScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${pixelId}');
        `;
        document.head.appendChild(gtagScript);
      }
    };

    // Função para rastrear eventos de conversão
    const trackConversion = (eventName: string, value?: number) => {
      // Facebook Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, value ? { value: value, currency: 'BRL' } : {});
      }

      // Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, {
          value: value,
          currency: 'BRL'
        });
      }

      console.log(`Conversion tracked: ${eventName}`, value ? { value } : '');
    };

    // Função para criar cookie de retargeting
    const setRetargetingCookie = () => {
      const cookieValue = `retargeting_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      document.cookie = `retargeting_id=${cookieValue}; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
      return cookieValue;
    };

    // Inicializar retargeting
    const retargetingId = setRetargetingCookie();
    console.log('Retargeting ID:', retargetingId);

    // Adicionar pixels de retargeting (substitua pelos IDs reais)
    // createRetargetingPixel('fb_123456789'); // Facebook Pixel
    // createRetargetingPixel('gtag_GA_MEASUREMENT_ID'); // Google Ads

    // Rastrear eventos de interesse
    const trackInterestEvents = () => {
      // Rastrear tempo na página
      let timeOnPage = 0;
      const interval = setInterval(() => {
        timeOnPage += 5;
        if (timeOnPage >= 30) { // 30 segundos
          trackConversion('time_on_page_30s');
          clearInterval(interval);
        }
      }, 5000);

      // Rastrear scroll
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
        }
        if (maxScroll >= 50) {
          trackConversion('scroll_50_percent');
          window.removeEventListener('scroll', trackScroll);
        }
      };
      window.addEventListener('scroll', trackScroll);

      return () => {
        clearInterval(interval);
        window.removeEventListener('scroll', trackScroll);
      };
    };

    const cleanup = trackInterestEvents();

    return () => {
      cleanup();
    };
  }, []);

  // Função para rastrear conversões específicas
  const trackPurchase = (value: number) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', { value: value, currency: 'BRL' });
    }
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase', {
        value: value,
        currency: 'BRL'
      });
    }
  };

  const trackLead = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead');
    }
  };

  return { trackPurchase, trackLead };
};

export default useRetargeting;
