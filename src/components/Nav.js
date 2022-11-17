import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  let navigate = useNavigate()

  return (
    <header className="nav">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/97/171/591/food-hamburgers-minimalism-wallpaper-preview.jpg"
        className="logo"
        alt="logo"
      ></img>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/feed">Home</Link>
          </li>

          <li>
            <Link to="/profile">My Profile</Link>
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
            <p className="navbar-p" onClick={() => navigate(-1)}>
              Back
            </p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
