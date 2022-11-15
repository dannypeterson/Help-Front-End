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
            <Link to="/feed">Home</Link>
          </li>

          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>

          <li>
            <Link to="/createreview">Create Review</Link>
          </li>

          <li>
            <Link to="/logout">Logout</Link>
          </li>

          <li>
            <p onClick={() => navigate(-1)}>Back</p>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
