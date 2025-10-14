import { useEffect } from 'react';

interface HeatmapData {
  x: number;
  y: number;
  timestamp: number;
  element: string;
}

const useHeatmap = () => {
  useEffect(() => {
    const trackMouseMovement = (e: MouseEvent) => {
      const heatmapData: HeatmapData = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        element: (e.target as HTMLElement)?.tagName || 'unknown'
      };

      // Aqui você pode enviar os dados para um serviço de analytics
      // Por exemplo: Google Analytics, Hotjar, ou seu próprio backend
      console.log('Heatmap data:', heatmapData);
      
      // Exemplo de envio para localStorage (para demonstração)
      const existingData = JSON.parse(localStorage.getItem('heatmapData') || '[]');
      existingData.push(heatmapData);
      
      // Manter apenas os últimos 1000 pontos para não sobrecarregar o localStorage
      if (existingData.length > 1000) {
        existingData.splice(0, existingData.length - 1000);
      }
      
      localStorage.setItem('heatmapData', JSON.stringify(existingData));
    };

    const trackClicks = (e: MouseEvent) => {
      const clickData = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        element: (e.target as HTMLElement)?.tagName || 'unknown',
        text: (e.target as HTMLElement)?.textContent?.substring(0, 50) || '',
        type: 'click'
      };

      console.log('Click data:', clickData);
      
      // Enviar dados de clique para analytics
      const existingClicks = JSON.parse(localStorage.getItem('clickData') || '[]');
      existingClicks.push(clickData);
      
      if (existingClicks.length > 500) {
        existingClicks.splice(0, existingClicks.length - 500);
      }
      
      localStorage.setItem('clickData', JSON.stringify(existingClicks));
    };

    const trackScroll = () => {
      const scrollData = {
        scrollY: window.scrollY,
        scrollX: window.scrollX,
        timestamp: Date.now(),
        pageHeight: document.documentElement.scrollHeight,
        viewportHeight: window.innerHeight
      };

      console.log('Scroll data:', scrollData);
    };

    // Adicionar event listeners
    document.addEventListener('mousemove', trackMouseMovement);
    document.addEventListener('click', trackClicks);
    window.addEventListener('scroll', trackScroll);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', trackMouseMovement);
      document.removeEventListener('click', trackClicks);
      window.removeEventListener('scroll', trackScroll);
    };
  }, []);
};

export default useHeatmap;
