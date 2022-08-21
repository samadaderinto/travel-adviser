import { CssBaseline,Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import placeDetails from './components/placeDetails/placeDetails';
import Maps from './components/Maps/Maps';
import List from './components/List/List';



function App() {
  return (
    <>
     <CssBaseline/>
     <Header />
     <Grid container spacing={3} style={{width: '100%'}}>
       <Grid item xs={12} md={4}>
        <List />
       </Grid>
       <Grid item xs={12} md={4}>
        <Maps />
       </Grid>
     </Grid>
    </>
  );
}

export default App;
