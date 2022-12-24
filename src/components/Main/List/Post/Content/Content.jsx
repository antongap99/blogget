import style from './Content.module.css';
import PropTypes from 'prop-types'
import { Text } from '../../../../../UI/Text/Text';


export const Content = ({ author, titleName }) => {

  return (
    <div className={style.content}>
      <Text
        As='h2'
        size={14}
        tsize={18}
        dsize={20}
        className={style.title}
      >
        <a className={style.linkPost} href="#post">{titleName}</a>
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
    </div>
  )
}

Content.propTypes = {
  author: PropTypes.string,
  titleName: PropTypes.string,
} 
