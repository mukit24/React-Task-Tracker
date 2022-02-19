const Button = ({color,text,onClick}) => {
  return (
    <button onClick={onClick} className={`btn ${color} py-0`}>{text}</button>
  )
}

export default Button