import React, { useImperativeHandle, useState } from 'react';
import { menuText } from '../utils/MenuText';
import css from '../accets/css/Menu.module.css';

export const Menu = React.forwardRef((props, ref) => {
  const [isShow, setIsShow] = useState(false);

  const menu = menuText.map((v, i) => {
    if (v === 'hr') {
      return <hr key={i} />;
    }

    if (v.children) {
      const menuChild = v.children.map((v, i) => {
        if (v === 'hr') {
          return <hr key={i} />;
        } else if (!!v.type) {
          switch (v.type) {
            case 'radio':
              return (
                <li key={i}>
                  <input
                    type={v.type}
                    id={v.name}
                    name={v.radioName ? v.radioName : null}
                    defaultChecked={v.checked ? 'checked' : null} />
                  <label htmlFor={v.name}>{v.name}</label>
                </li>
              );
            default:
              return (
                <li key={i}>
                  <input
                    type={v.type}
                    id={v.name}
                    defaultChecked={v.checked ? 'checked' : null} />
                  <label htmlFor={v.name}>{v.name}</label>
                </li>
              );
          }
        } else {
          return (
            <li key={i}>
              <i className={`iconfont ${v.img}`} />
              {v.name}
            </li>
          );
        }
      })
      return (
        <div key={i} className={css.menuChild}>
          <li style={{ position: 'relative' }}>
            <i className={`iconfont ${v.img}`} />
            {v.name}
            <i className='iconfont icondayu2x'
              style={{ position: 'absolute', right: 0 }} />
          </li>
          <ul className={
            [
              props.point.x2 ? css.toLeft : null,
              v.name === '新建(W)' && props.point.y2 ? css.toTop : null
            ].join(' ')
          }>
            {menuChild.map(v => v)}
          </ul>
        </div>
      );
    } else {
      return <li key={i}><i className={`iconfont ${v.img}`} />{v.name}</li>;
    }
  });

  useImperativeHandle(ref, () => ({
    show: () => {
      setIsShow(true);
    },
    hidden: () => {
      setIsShow(false);
    }
  }))

  return (
    <div className={css.menu} style={{
      display: isShow ? 'block' : 'none',
      left: `${props.point.x}px`,
      top: `${props.point.y}px`
    }}>
      <ul>
        {menu.map(v => v)}
      </ul>
    </div>
  );
})
