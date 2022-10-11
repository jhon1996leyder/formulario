import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { place } from './place/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(
    private firestore: Firestore
  ) { }

  addPlace(place:place){
    const placeRef = collection(this.firestore, 'places');
    return addDoc(placeRef, place)
  }

  getPlace():Observable<place[] | any>{
    const placeRef = collection(this.firestore, 'places')
    return collectionData(placeRef,{idField:'id'}) as Observable<place[]>;
  }

}
