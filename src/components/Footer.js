import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="text-center">
        <p className="text-bold">Copyright &copy; 2021</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer