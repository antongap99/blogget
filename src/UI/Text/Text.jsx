import classNames from "classnames";
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    center,
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    medium,
    bold,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style[`fs${size}`],
    style[color],
    { [style.center]: center },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fsd${dsize}`]]: dsize },
    { [style.bold]: bold },
    { [style.medium]: medium },
  )


  return <As className={classes} href={href} onClick={onClick}>{children}</As>
};


Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  bold: PropTypes.bool,
  medium: PropTypes.bool, 
  onClick: PropTypes.func, 
}
