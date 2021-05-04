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
import "../styles/ParkingAreas.css";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ParkingA from "./ParkingA";
import parkingAreas from "../data/parkingAreas";
// import { toast } from "../helpers/toast";

const ParkingAreas: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  let history = useHistory();

  function DisplayAreas() {
    // console.log("parkingAreas", parkingAreas);
    return (
      <>
        {parkingAreas.map((area, index) => {
          // console.log("area, index", area, index);
          return (
            <IonCard
              onClick={(e) => {
                e.preventDefault();
                history.push({
                  pathname: "/parkingA",
                  state: { cars: area.BlockedCars },
                });
              }}
              key={index}
            >
              <IonCardHeader>
                <IonCardTitle>{area.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol class="ion-text-center total-slots">
                      Total Slots: {area.BlockedCars.length}
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol class="available-slots">
                      Available Slots: {getAvailableSlots(area.BlockedCars)}
                    </IonCol>
                    <IonCol class="blocked-slots">
                      Blocked Slots: {getBlockedSlots(area.BlockedCars)}
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          );
        })}
      </>
    );
  }

  function getAvailableSlots(arr: any) {
    let occ = [];
    arr.forEach(function (elem: number, index: number) {
      if (elem === 0) {
        occ.push(index);
      }
      return occ.length;
    });
    return occ.length;
  }

  function getBlockedSlots(arr: any) {
    let occ = [];
    arr.forEach(function (elem: number, index: number) {
      if (elem === 1) {
        occ.push(index);
      }
      return occ.length;
    });
    return occ.length;
  }

  return (
    <>
      <IonLoading message="Please wait..." duration={0} isOpen={loading} />

      <DisplayAreas />
    </>
  );
};

export default ParkingAreas;
