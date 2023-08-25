import { Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';

import NavLinks from './NavLinks';
import { useParams } from 'react-router-dom';

const MainNavigation = (props) => {
  const userId = useParams().uid;
  return (
    <div>
      <aside className='sm:w-full lg:w-64'>
        <div className='h-full overflow-y-auto rounded-lg bg-gray-700 px-3 py-4'>
          <div className='flex flex-col items-center pb-4'>
            <Avatar
              alt={props.user.userName}
              src={props.user.avatar}
              sx={{ width: 150, height: 150 }}
            />
            <div className='pt-4'>Username: {props.user.userName}</div>
            <div>Tier: {props.user.isAdmin === true ? 'Admin' : 'Regular User'}</div>
            <div>
              <NavLink to={`/profile/${userId}`}>[View My Public Profile]</NavLink>
            </div>
          </div>
          <nav>
            <NavLinks />
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default MainNavigation;
