import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { toast } from "../helpers/toast";

const ParkingAreas: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <IonLoading message="Please wait..." duration={0} isOpen={loading} />
      {/* <IonGrid>
        <IonRow class="ion-align-items-center">
          <IonCol class="ion-padding">
            <IonItem> */}
      <IonCard>
        <IonCardHeader>
          {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
          <IonCardTitle>Parking Area 1</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>Available | Blocked = Cars</IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
          <IonCardTitle>Parking Area 2</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>Available | Blocked = Cars</IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
          <IonCardTitle>Parking Area 3</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>Available | Blocked = Cars</IonCardContent>
      </IonCard>
      {/* </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid> */}
    </>
  );
};

export default ParkingAreas;
