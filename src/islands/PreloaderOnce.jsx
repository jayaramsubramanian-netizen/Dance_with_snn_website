// The intro animation used to play once per visit (single-page app). On the
// multi-page site, play it on the first page of a browser session only.
import { useEffect, useState } from 'react';
import { themed } from './themed';
import { Preloader } from '../components/Preloader';

function PreloaderOncePerSession() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!sessionStorage.getItem('snn-preloader-seen')) {
        sessionStorage.setItem('snn-preloader-seen', '1');
        setShow(true);
      }
    } catch { setShow(true); }
  }, []);
  return show ? <Preloader /> : null;
}
export default themed(PreloaderOncePerSession);
