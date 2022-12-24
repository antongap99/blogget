import {Text} from '../../../UI/Text/Text';
import style from './Title.module.css';


const Title = ({children}) => {

  return (
    <Text As='h1' size={22} tsize={26} center className={style.heading}>
      {children}
    </Text>
  )
}

export default  Title