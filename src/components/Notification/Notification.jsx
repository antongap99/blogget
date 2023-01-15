import ReactDOM from 'react-dom'
import { Text } from '../../UI/Text/Text';
import style from './Notification.module.css';

export const Notification = (props) => {

  return ReactDOM.createPortal(
    <Text As={'div'} className={style.notify} color={props.color}>
      <p>{props.log}</p>
    </Text>
     ,
     document.getElementById('notification-root')
  )
}

