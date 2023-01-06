import { useContext } from 'react';
import { authContext } from '../../../context/authContext';
import { useDispatch, useSelector } from 'react-redux';
import style from './FormComment.module.css';
import { updateComment } from '../../../store';

export const FormComment = (props) => {
  const {auth} = useContext(authContext);

  const value =useSelector(state => state.comment);
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  }

  const handleChange = e => {
    dispatch(updateComment(e.target.value))
  }

  return (
    <form className={style.form}
      onSubmit={handleSubmit}
    >
      <h3 size={14} tsize={18} >{auth.name}</h3>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      ></textarea>
      <button className={style.btn} type='submit'>Отправить</button>
    </form>
  )
}

