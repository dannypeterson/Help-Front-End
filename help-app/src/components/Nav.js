import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  let navigate = useNavigate()

  return (
    <header>
      <img src="" className="logo" alt="logo"></img>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <p onClick={() => navigate(-1)}>Back</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
