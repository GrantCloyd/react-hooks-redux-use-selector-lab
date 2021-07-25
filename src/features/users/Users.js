import React from "react"
// add any needed imports here
import { useSelector } from "react-redux"

function Users() {
   const usersData = useSelector(state => state.users)
   console.log(usersData)
   const usersArr = usersData.map(user => <p key={user.username}>{user.username}</p>)

   return (
      <div>
         <ul>
            Users!
            {usersArr}
            <p>{usersArr.length}</p>
         </ul>
      </div>
   )
}

export default Users
