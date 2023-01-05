import style from './Content.module.css';
import PropTypes from 'prop-types'
import { Text } from '../../../../../UI/Text/Text';
import { useState } from 'react';
import { Modal } from '../../../../Modal/Modal';


export const Content = ({ author, title, markdown }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={style.content}>
      <Text
        As='h2'
        size={14}
        tsize={18}
        dsize={20}
        className={style.title}
      >
        <a className={style.linkPost} href="#post" onClick={() => {
          setIsModalOpen(true);
        }}>{title}</a>
      </Text>

      <Text
        As='a'
        color='orange'
        size={12}
        tsize={14}
        className={style.linkAuthor}
        href="#author">
        {author}
      </Text>
      {isModalOpen &&
        <Modal
          markdown={markdown}
          author={author}
          title={title}
          closeModal={() => {
            setIsModalOpen(false)
          }} />}
    </div>
  )
}

Content.propTypes = {
  author: PropTypes.string,
  titleName: PropTypes.string,
  markdown: PropTypes.string,
} 
