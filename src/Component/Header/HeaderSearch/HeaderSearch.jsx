import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider'
import './HeaderSearch.css'

export default function SearchButton(props) {
          const [state, setState] = React.useState({top: false});

          const toggleDrawer = (anchor, open) => (event) => {
                    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                              return;
                    }

                    setState({ ...state, [anchor]: open });
          };

          const list = (anchor) => (
                    <div>
                              <List>
                                        <div className={'searchbody'}>
                                                  <input className={'searchInp'} placeholder='Qidirish...' type="text" name="" id="" />
                                                  <Button onClick={toggleDrawer(anchor, false)}
                                                  variant="contained" color="secondary">
                                                            Qidirish
                                                  </Button>
                                        </div>
                              </List>
                              <Divider />
                    </div>
          );

          return (
                    <div>
                              {['top'].map((anchor) => (
                                        <React.Fragment key={anchor} >
                                                  <Button onClick={toggleDrawer(anchor, true)}>   <SearchIcon style={{ color: "white" }} />  </Button>
                                                  <SwipeableDrawer 
                                                            anchor={anchor}
                                                            open={state[anchor]}
                                                            onClose={toggleDrawer(anchor, false)}
                                                            onOpen={toggleDrawer(anchor, true)}
                                                  >
                                                            {list(anchor)}
                                                  </SwipeableDrawer>
                                        </React.Fragment>
                              ))}
                    </div>
          );
}