'use client';

import { useEffect } from 'react';

export default function ClientComponents({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Load Bootstrap JS
    const script1 = document.createElement('script');
    script1.src = '/js/bootstrap.bundle.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Load Tiny Slider
    const script2 = document.createElement('script');
    script2.src = '/js/tiny-slider.js';
    script2.async = false;
    document.body.appendChild(script2);

    // Load custom JS after tiny-slider
    const script3 = document.createElement('script');
    script3.src = '/js/custom.js';
    script3.async = false;
    script3.onload = () => {
      // Initialize tiny slider after it loads (fallback)
      if ((window as any).tns) {
        const el = document.querySelectorAll('.testimonial-slider');
        if (el.length > 0) {
          (window as any).tns({
            container: '.testimonial-slider',
            items: 1,
            axis: 'horizontal',
            controlsContainer: '#testimonial-nav',
            swipeAngle: false,
            speed: 700,
            nav: true,
            controls: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3500,
            autoplayButtonOutput: false,
          });
        }
      }
    };
    document.body.appendChild(script3);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return <>{children}</>;
}
