import React, { useEffect, useState, useRef } from 'react';
import { getTime } from '../utils/getTime';
import { Menu } from './Menu';
import { Footer } from './Footer';
import css from '../accets/css/App.module.css';

function App() {
  const [local, setLocal] = useState(getTime());
  const [point, setPoint] = useState({});
  const menu = useRef();

  useEffect(() => {
    const t = setTimeout(() => {
      setLocal(getTime());
    }, 1000);

    return () => clearTimeout(t);
  }, [local])

  useEffect(() => {
    window.oncontextmenu = e => {
      e.preventDefault();
    }

    window.onclick = () => {
      menu.current.hidden();
    }
  }, [])

  return (
    <>
      <div
        className={css.context}
        onContextMenu={e => {
          setPoint({
            x: window.innerWidth - e.clientX > 232 ? e.clientX + 2 : e.clientX - 232,
            y: window.innerHeight - e.clientY > 212 ? e.clientY + 2 : e.clientY - 212,
            x2: window.innerWidth - e.clientX > 433 ? false : true,
            y2: window.innerHeight - e.clientY > 433 ? false : true
          })
          menu.current.show();
        }}
      >
        <Menu ref={menu} point={point} />
      </div>
      <Footer local={local} />
    </>
  );
}

export default App;
