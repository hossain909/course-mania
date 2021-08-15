import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminOption from './AdminOption';
import './Sidebar.css';
import UserOption from './UserOption';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    fetch("https://mighty-badlands-04385.herokuapp.com/isAdmin", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [loggedInUser.email])
  return (
    <div id="sidebar" className="bg-info rounded pl-3 py-4">
      {
        isAdmin ? <AdminOption /> : <UserOption />
      }
    </div>
  );
};

export default Sidebar;

