import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { signOut } from "../../features/featuresUser/actions/Action"
import '../Error404/Error404.css'

/**
 * Component React that displays the page Error 404
 * @function 
 */

function Error404() {
   /**
     * The hook that comes with React Router that will allow us to use the browser’s History API.
     */
   const nav = useNavigate()

   /**
     * The dispatch is used to send actions to the reducer
     */
    const dispatch = useDispatch()

    /**
     * The callback handleSubmit for the sign out button is triggered when the form is submitted.
     * @param {*} event 
     */
    function handleSubmit(event) {
      event.preventDefault()
      localStorage.removeItem('token')        // Token will be removed when sign out button is clicked
      dispatch(signOut())
      nav('/')
    }

    return (
      <div> 
          <section className="error-section">
              <h1 className="error-title">Error 404 !</h1>
              <p className="error-content">
                  The page you requested does not exist.
              </p>
              <Link to="/" onClick={handleSubmit}>                                                       {/* Link to Homepage */}
                  <p className="error-link">Go to homepage</p>
              </Link>
          </section>
      </div>
    )
}

export default Error404