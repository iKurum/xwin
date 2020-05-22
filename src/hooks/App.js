import React, { useEffect, useState } from 'react';
import { getTime } from '../utils/getTime';
import css from '../accets/css/App.module.css';

function App() {
  const [local, setLocal] = useState(getTime());

  useEffect(() => {
    const t = setTimeout(() => {
      setLocal(getTime());
    }, 1000);

    return () => clearTimeout(t);
  }, [local])

  return (
    <footer className={css.footer}>
      <div>
        <i className="iconfont iconwindows"></i>
        <i className="iconfont iconchaxun"></i>
      </div>
      <div></div>
      <div>
        <i className="iconfont icondianchi"></i>
        <i className="iconfont iconWIFIwofi"></i>
        <i className="iconfont iconlaba"></i>
        <div className={css.local}>
          {local.time}<br />{local.date}
        </div>
        <i className="iconfont iconduihuakuang"></i>
      </div>
    </footer>
  );
}

export default App;
