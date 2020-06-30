import Menu from './components/Menu';
import Page from './pages/Page';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { flagOutline, calendar } from 'ionicons/icons';
import GoalView from './pages/GoalView';
import CalendarView from './pages/CalendarView';

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/:name" component={CalendarView} exact />
            <Redirect from="/" to="/page/Inbox" exact />

            {/* <IonReactRouter>
              <IonTabs>
                <IonRouterOutlet>
                  <Route path="/Calendar" component={CalendarView} exact={true} />
                  <Route path="/Goals" component={GoalView} exact={true} />
                  <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                  <IonTabButton tab="Calendar" href="/Calendar">
                    <IonIcon icon={calendar} />
                    <IonLabel>Calendar</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="Goals" href="/Goals">
                    <IonIcon icon={flagOutline} />
                    <IonLabel>Goals</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            </IonReactRouter> */}

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
