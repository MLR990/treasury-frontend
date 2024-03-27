import classes from './Button.module.scss';

export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? 'text-button' : 'button';
  cssClasses += ' ' + className;
  return (
    <button className={`${classes.button} ${cssClasses}`} {...props}>
      {children}
    </button>
  );
}
