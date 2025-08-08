// Utilidades para manejo de descargas de la app

export const APP_LINKS = {
  ios: 'https://apps.apple.com/cl/app/nutria/id6744851977',
  android: 'https://play.google.com/store/apps/details?id=com.nutriahealth.app'
};

export const detectOS = (): 'ios' | 'android' | 'unknown' => {
  if (typeof window === 'undefined') return 'unknown';
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  } else if (/android/.test(userAgent)) {
    return 'android';
  } else {
    return 'unknown';
  }
};

export const getSmartDownloadLink = (): string => {
  const os = detectOS();
  
  switch (os) {
    case 'ios':
      return APP_LINKS.ios;
    case 'android':
      return APP_LINKS.android;
    default:
      // Por defecto, dirigir a iOS (App Store)
      return APP_LINKS.ios;
  }
};

export const openAppStore = (platform: 'ios' | 'android' | 'smart') => {
  let url: string;
  
  switch (platform) {
    case 'ios':
      url = APP_LINKS.ios;
      break;
    case 'android':
      url = APP_LINKS.android;
      break;
    case 'smart':
      url = getSmartDownloadLink();
      break;
    default:
      url = APP_LINKS.ios;
  }
  
  window.open(url, '_blank', 'noopener,noreferrer');
};