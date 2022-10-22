import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './layout.scss';
import Grid from '@mui/material/Grid';

const Layout = () => {
  return (
    <Grid container sx={{ height: '100vh', width: '100vw' }} alignItems='stretch'>
      <Grid item xs={1}>
        <Sidebar/>
      </Grid>
      <Grid item xs={11}>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet />

        <span className='tags bottom-tags'>
        &lt;body&gt;
        <br/>
        <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </Grid>
    </Grid>
  )
}

export default Layout 