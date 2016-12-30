import React from 'react';
import UserEntry from './UserEntry';

const UserList = ({users, profilePopup}) => (
  <div className='user-profile'>
    {users.length === 0 &&
  		<p>0 users online</p>
  	}
    {users.map((user, i) => (
    	<UserEntry user={user} key={i} profilePopup={profilePopup} />
    ))}
  </div>
);

export default UserList;
