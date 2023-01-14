import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom'
import { useRef, useState, useEffect } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { FormComment } from './FormComment/FormComment';
import { Comments } from './Comments/Comments';
import { Loader } from '../../UI/Loader/Loader'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { commentsSlice } from '../../store/comment/commentsSlice';

export const Modal = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [isOpenCommentForm, setIsOpenCommentForm] = useState(false);
  const dispatch = useDispatch();
  const [comment, status] = useCommentsData(id);
  const { author, authorComments, body } = comment;



  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current
      || target.parentNode === closeBtnRef.current
      || target.parentNode.parentNode === closeBtnRef.current) {
      navigate(`/category/${page}`)
      document.body.style.overflow = 'auto';
    } else if (e.type === 'keydown' && e.keyCode === 27) {
      navigate(`/category/${page}`)
      document.body.style.overflow = 'auto';
    }
  };



  useEffect(() => {

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleClick);
      dispatch(commentsSlice.actions.clearCommentData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        { status !== 'error' ? 
        (author ?
          (
            <>
              <h2 className={style.title}>{'title'}</h2>
              <div className={style.content}>
                <h3 className={style.title}>{author}</h3>
                <Markdown options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      }
                    }
                  }
                }}>
                  {body}
                </Markdown>
              </div>
              <p className={style.author}>{authorComments}</p>
              <Comments />
              
              <button className={style.button} onClick={() => { setIsOpenCommentForm(!isOpenCommentForm) }}>Написать комментарий</button>
              {isOpenCommentForm && <FormComment />}
            </>)
          : <div className={style.loadwrap}><Loader color={"#99bab3"} size={50} /></div>
          )
          : 'ошибка'
        }
        <button className={style.close} ref={closeBtnRef}><CloseIcon /></button>
      </div>
    </div>
    ,
    document.getElementById('modal-root')
  )
};

Modal.propTypes = {
  markdown: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  closeModal: PropTypes.func
}
