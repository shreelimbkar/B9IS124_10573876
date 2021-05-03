import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import ParkingAreas from "../components/ParkingAreas";
import { signOutUser } from "../firebaseConfig";

const Dashboard: React.FC = () => {
  function signOut() {
    const res = signOutUser();
    console.log(res);
    res
      .then((user) => {
        console.log(user);
        window.history.replaceState({}, "", "/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-text-center">
          <IonTitle>Parking Areas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ParkingAreas />
        <IonButton onClick={signOut}>SignOut</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
