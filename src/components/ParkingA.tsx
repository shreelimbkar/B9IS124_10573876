import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { carSport } from "ionicons/icons";
import { useLocation } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "../styles/parkingA.css";
// import parkingAreas from "../data/parkingAreas";
// import { toast } from "../helpers/toast";

const ParkingA: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [carCounter, setCarCounter] = useState<number>(0);
  const location = useLocation();
  let arrCars: any = [];

  useEffect(() => {
    // console.log("parkingAreas", parkingAreas);
    arrCars.push(location.state);
  }, [location]);

  function bookCarSlot(evt: any) {
    // console.log(evt.target.parentNode);
    const rowEle = rowRef.current;
    let noOfCars: any = rowEle?.getElementsByTagName("div");
    for (let i = 0; i < noOfCars.length; i++) {
      noOfCars[i].style.background = "#ccc";
      noOfCars[i].style.color = "black";
    }
    console.log("rowEle", noOfCars);
    const colEle = evt.target.parentNode;
    if (colEle) {
      const bgColor = colEle.style.getPropertyValue("background");
      if (bgColor === "green") {
        colEle.style.background = "#ccc";
        colEle.style.color = "black";
        setCarCounter(carCounter + 1);
      } else {
        colEle.style.background = "green";
        colEle.style.color = "cyan";
        setCarCounter(carCounter + 1);
      }
    }
  }

  arrCars.push(location.state);
  //   console.log("location.state. CARS ", location.state, arrCars[0].cars);
  const rowRef = useRef<HTMLIonRowElement>(null);

  return (
    //   <IonLoading message="Please wait..." duration={0} isOpen={loading} />
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-text-center">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Parking Area - 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Car Parking Slots</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Available | Blocked = Cars
            <IonGrid>
              <IonRow ref={rowRef}>
                {arrCars[0].cars.map((c: any, index: number) => {
                  return (
                    <div
                      onClick={(e) => {
                        bookCarSlot(e);
                      }}
                      key={index}
                    >
                      <IonIcon icon={carSport}></IonIcon>
                    </div>
                  );
                })}
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow>
            <IonCol class="ion-text-center">
              <IonButton>Confirm selected Car slot</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ParkingA;
