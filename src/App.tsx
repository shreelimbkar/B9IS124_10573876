import { Redirect, Route } from "react-router-dom";
import { IonApp, IonLoading, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ParkingA from "./components/ParkingA";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { getCurrentUser } from "./firebaseConfig";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCurrentUser().then((user) => {
      console.log("User", user);
      if (user) {
        window.history.replaceState({}, "", "/dashboard");
      } else {
        window.history.replaceState({}, "", "/signin");
      }
      setLoading(false);
    });
  }, []);

  return (
    <IonApp>
      {loading ? (
        <IonLoading message="Please wait..." duration={0} isOpen={loading} />
      ) : (
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/parkingA" component={ParkingA} />
            {/* <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route> */}
          </IonRouterOutlet>
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
