import React from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {assignId} from '../../../utilities/generateId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {useEffect} from 'react';
import {debounceRaf} from '../../../utilities/debounce';
import {Text} from '../../../UI/Text/Text';

const LIST = [
  { value: 'Главная', Icon: HomeIcon },
  { value: 'топ', Icon: TopIcon },
  { value: 'Лучшее', Icon: BestIcon },
  { value: 'Горячее', Icon: HotIcon },
].map(assignId);


export const Tabs = () => {

  // выподающее меню (открывать / закрывать)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // в зависимости от ширины экрна отображать меню или делать выпадающий список
  const [isDropDown, setIdDropDown] = useState(true)
  const [menuActiveTitle, setMenuActiveTitle] = useState('menu');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIdDropDown(true);
    } else{
      setIdDropDown(false);
    }
  }

  const handleClickNenu = e => {
    const target = e.target;
    setMenuActiveTitle(target.textContent);
  }


  useEffect(() => {
    const debounceResize = debounceRaf(handleResize); // эта функция сработает после монитрования элемента
    debounceResize();
    window.addEventListener('resize', debounceResize);  // если пользователь перевернул экран
    return () => {
      window.removeEventListener('resize', debounceResize);
    }
  }, [])

  return (
    <div className={style.container}>
      {isDropDown && <div className={style.wrapperBtn}>
        <button className={style.btn} onClick={() => { setIsDropDownOpen(!isDropDownOpen) }}>
          {menuActiveTitle}
          <ArrowIcon/>
        </button>
      </div>}

      {(isDropDownOpen || !isDropDown ) && (
      <ul className={style.list} onClick={() => {
        setIsDropDownOpen(!isDropDownOpen)
      }}>
        {
          LIST.map(({ value, id, Icon}) => (
            <Text As='li' bold className={style.item} key={id}>
              <button className={style.btn} onClick={handleClickNenu}>
                {value}
                {Icon && <Icon width={30} height={30}/>}
              </button>
            </Text>
          ))
        }
      </ul>
      )}
    </div>
  )
}


Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
}