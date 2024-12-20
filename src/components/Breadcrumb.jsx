import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
      <ul className='breadcrumb'>

        <div className='img-container'>
          <img src="/images/contacts/bx-home-alt.svg" alt="" />
        </div>
        <li>
          <Link to='/'>Start</Link>
        </li>
        {
          pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`

            return (

              <li key={to} className='list'>
                <img src="/images/contacts/bx-chevrons-right.svg" alt="" />
                {index === pathnames.length - 1
                  ? (<span>{value.replace(/-/g, ' ')}</span>)
                  : (<Link to={to}>{value.replace(/-/g, ' ')}</Link>)}
              </li>

            );
          })
        }
      </ul>
    </div>
  )
}

export default Breadcrumb