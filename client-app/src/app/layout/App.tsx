import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import {  Container } from 'semantic-ui-react';
import {Activity} from '../models/activity';
import NavBar from './NavBar';
import ActivityDashBoard from '../../features/activities/dashboard/ActivityDashBoard';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/api/activities").then((response) => {
      setActivities(response.data);
    })
  }, [])

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em' }}>
      <ActivityDashBoard activities={activities}/>
      </Container>
    </>
  );
}

export default App;
