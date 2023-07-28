import './HomePageContainer.css';
import { IonList ,IonCheckbox, IonInput, IonItem, IonRange, IonSelect, IonSelectOption, IonToggle } from '@ionic/react';

interface HomePageContainer { }

const HomePageContainer: React.FC<HomePageContainer> = () => {
  return (
    <>
     
      <IonInput label="Solid input" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonInput>

      <br />

      <IonInput label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>

      <br/>

      <IonInput label="Default counter" labelPlacement="floating" counter={true} maxlength={20}></IonInput>

      <IonInput
        id="custom-input"
        label="Custom Counter Format"
        labelPlacement="floating"
        counter={true}
        maxlength={20}
        counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
      </IonInput>

      <IonItem>
        <IonSelect label="Select" placeholder="Make a Selection">
          <IonSelectOption value="">No Game Console</IonSelectOption>
          <IonSelectOption value="nes">NES</IonSelectOption>
          <IonSelectOption value="n64">Nintendo64</IonSelectOption>
          <IonSelectOption value="ps">PlayStation</IonSelectOption>
          <IonSelectOption value="genesis">Sega Genesis</IonSelectOption>
          <IonSelectOption value="saturn">Sega Saturn</IonSelectOption>
          <IonSelectOption value="snes">SNES</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonToggle>Toggle</IonToggle>
      </IonItem>

      <IonItem>
        <IonCheckbox>Checkbox</IonCheckbox>
      </IonItem>

      <IonItem>
        <IonRange label-placement="start">
          <div slot="label">Range</div>
        </IonRange>
      </IonItem>


    </>
  );
};

export default HomePageContainer;
