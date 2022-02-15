const Button = ({color,text,onClick}) => {
  return (
    <button onClick={onClick} className={`btn ${color}`}>{text}</button>
  )
}

export default Button