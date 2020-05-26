import React, { useState } from 'react';
import css from '../accets/css/Footer.module.css';

export const Footer = props => {
  const [zhORen, setZhORen] = useState(true);

  return (
    <footer className={css.footer}>
      <div>
        <div style={{ position: 'relative' }}>
          <i className='iconfont iconwindows'></i>
          <span style={{ left: '10px' }}>开始</span>
        </div>
        <div style={{ position: 'relative' }}>
          <i className='iconfont iconchaxun'></i>
          <span>在这里输入你要搜索的内容</span>
        </div>
      </div>
      <div></div>
      <div>
        <p>
          <i className='iconfont icondianchi'></i>
          <span>100% 可用(已接通电源)</span>
        </p>
        <p>
          <i className='iconfont iconWIFIwofi'></i>
          <span style={{ top: '-20px' }}>
            Xwin<br/>
            Internet 访问
          </span>
        </p>
        <p>
          <i className='iconfont iconlaba'></i>
          <span>扬声器 10%</span>
        </p>
        <p>
          <i
            className={['iconfont', zhORen ? 'iconzhong' : 'iconying'].join(' ')} onClick={() => {
              setZhORen(!zhORen);
            }}
          ></i>
          <span style={{top: '-40px'}}>
            {zhORen ? '中文模式' : '英语模式'}<br /><br />
            单机右键查看更多选项
          </span>
        </p>
        <div className={css.local}>
          {props.local.time}<br />{props.local.date}
        </div>
        <p>
          <i className='iconfont iconduihuakuang'></i>
          <span>无新通知</span>
        </p>
      </div>
    </footer>
  );
}