import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityList from "./ActivityList";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
}

function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectActivity}:Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && 
          <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}/>
        }
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
}

export default ActivityDashboard;
