import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import ParkingAreas from "../components/ParkingAreas";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-text-center">
          <IonTitle>Parking Areas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ParkingAreas />
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
