import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setcPwd] = useState('');

function signUpUser() {
    console.log(email, pwd, cpwd);
}

  return (
    <>
      <IonGrid>
        <IonRow class="ion-align-items-center">
          <IonCol class="ion-padding">
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" onIonChange={ (e:any) => setEmail( e.target.value )}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol class="ion-padding">
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" onIonChange={ (e:any) => setPwd( e.target.value )}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol class="ion-padding">
            <IonItem>
              <IonLabel position="floating">Confirm Password</IonLabel>
              <IonInput type="password" onIonChange={ (e:any) => setcPwd(e.target.value) }></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow className="ion-text-center">
          <IonCol class="ion-padding">
            {/* <IonItem> */}
            <IonButton expand="block" shape="round" onClick={signUpUser}>
              Sign Up
            </IonButton>
            <p>Already have an account? <Link to="/signin">SignIn</Link></p>
            {/* </IonItem> */}
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default SignUpForm;
