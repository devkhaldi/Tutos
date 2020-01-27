import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'
import { BarLoader } from 'react-spinners'

function Users() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(user)
  })
  return (
    <div>
      <button onClick={() => dispatch(fetchUsers())}>Fetch users</button>
      <div>
        <BarLoader loading={user.loading} color="#36D7B7" width="300" height="5" />
      </div>

      {/* fetch users failure */}
      {user.error !== '' && <h2>Something went wrong !</h2>}
      {/* No users returned  */}
      {user.users.length === 0 && !user.loading && <h2>No users</h2>}
      {/* display users */}
      {user.users.length !== 0 && (
        <ul>
          {user.users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Users
