import ReactDOM from 'react-dom'
import style from './Notification.module.css';

export const Notification = (props) => {

  return ReactDOM.createPortal(
    <div className={style.notify}>
      <p>{props.log}</p>
    </div>
     ,
     document.getElementById('notification-root')
  )
}

