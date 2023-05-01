import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

import { useGetMatchList } from '../../hooks/useGetMatchList';

const MatchList = () => {
  const { matchList } = useGetMatchList();
  return (
    <List>
      {matchList.map((match, id) => (
        <ListItem sx={{ justifyContent: 'center' }}>
          <ListItemButton key={id} sx={{ textAlign: 'center' }} component={Link} to={`/match/${match.id}`}>
            <ListItemText primary={match.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MatchList;
