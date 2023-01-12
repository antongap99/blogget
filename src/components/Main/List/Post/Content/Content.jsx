import style from './Content.module.css';
import PropTypes from 'prop-types'
import { Text } from '../../../../../UI/Text/Text';
import { Link, useParams } from 'react-router-dom';


export const Content = ({ author, title, id }) => {
  const { page } = useParams();

  return (
    <div className={style.content}>
      <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
        <Text
          As='h2'
          size={14}
          tsize={18}
          dsize={20}  
          className={style.linkPost} 
        >
          {title}
        </Text>
      </Link>
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
  markdown: PropTypes.string,
} 
