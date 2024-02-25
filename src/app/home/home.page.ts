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
  all(): boolean {
    return this.ledstate && this.ledstate2 && this.ledstate3;
  }
  constructor(private db: Firestore) {

  }
  async toggleLED() {
    this.ledstate = !this.ledstate; 
    await setDoc(doc(this.db, 'controlLED/LED1'), { encender: this.ledstate });
  }
  async toggleLED2() {
    this.ledstate2 = !this.ledstate2; 
    await setDoc(doc(this.db, 'controlLED/LED2'), { encender: this.ledstate2 });
  }
  async toggleLED3() {
    this.ledstate3 = !this.ledstate3; 
    await setDoc(doc(this.db, 'controlLED/LED3'), { encender: this.ledstate3 });
  }
  async toggleAll() {
    const turn = !this.all();
    this.ledstate = turn;
    this.ledstate2 = turn;
    this.ledstate3 = turn;
    await Promise.all([
      this.actEstado('LED1', turn),
      this.actEstado('LED2', turn),
      this.actEstado('LED3', turn)
    ]);
  }
  async actEstado(led:string, estado:boolean) {
    const ledRef = doc(this.db,'controlLED', led);
    await setDoc(ledRef, { encender: estado });
  }
}

