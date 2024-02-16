// home.page.ts
import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ledstate: any;
  ledstate2: any;
  ledstate3: any;
  constructor(private db: Firestore) {
  }
  async toggleLED() {
    this.ledstate = !this.ledstate; 
    await setDoc(doc(this.db, 'controlLED/LED1'), { encender: this.ledstate });
  }
  async toggleLED2() {
    this.ledstate2 = !this.ledstate2; 
    await setDoc(doc(this.db, 'controlLED/LED2'), { encender2: this.ledstate2 });
  }
  async toggleLED3() {
    this.ledstate3 = !this.ledstate3; 
    await setDoc(doc(this.db, 'controlLED/LED3'), { encender3: this.ledstate3 });
  }
}

