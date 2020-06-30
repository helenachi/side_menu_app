import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonButton,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
} from '@ionic/react';

import React from 'react';
import { useLocation, Route, Redirect } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, calendarSharp, calendar, settingsOutline, informationCircleOutline, globeOutline, flagSharp, flagOutline } from 'ionicons/icons';
import './Menu.css';
import { settings } from 'cluster';
import { IonReactRouter } from '@ionic/react-router';
import CalendarView from '../pages/CalendarView';
import GoalView from '../pages/GoalView';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: calendar,
    mdIcon: calendar,
  },
  {
    title: 'Settings',
    url: '/page/Settings',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline,
  },
  {
    title: 'About',
    url: '/page/About',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleOutline,
  },
  {
    title: 'Resources',
    url: '/page/Resources',
    iosIcon: globeOutline,
    mdIcon: globeOutline,
  },
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Doable</IonListHeader>
          {/* <IonNote>hi@ionicframework.com</IonNote> */}

          <IonMenuToggle autoHide={false}>
            <IonItem className={"Home"} routerLink="/page/Home" routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={calendar} md={calendar} />
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>

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

          {/* {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })} */}

        </IonList>

        <IonList id="labels-list">
          {/* <IonListHeader>Labels</IonListHeader> */}
          <IonButton>Logout</IonButton>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
