import { Outlet } from 'react-router-dom';
import LayoutMain from '../layouts/LayoutMain.tsx';

export default function Root() {
  return (
    <>
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </>
  )
}
