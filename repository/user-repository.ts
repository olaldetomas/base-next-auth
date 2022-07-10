import { plainToClass } from 'class-transformer';
import {
  collection,
  CollectionReference,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  QuerySnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { UserEntity, UserData } from '../models/user';

export class UserRepository {
  usersRef: CollectionReference<DocumentData> = collection(db, 'users');

  async create(userData: UserData): Promise<void> {
    // Create userRef for a user with email
    const docRef = doc(db, 'users', userData.email);
    // Get doc from firebase
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(doc(this.usersRef, userData.email), userData);
    }
  }

  async update(userData: UserData): Promise<void> {
    const userEntity = new UserEntity(userData);
    await updateDoc(doc(this.usersRef, userEntity.email), userEntity.userData);
  }

  async getAll(): Promise<UserEntity[]> {
    const jsonUsers: QuerySnapshot<DocumentData> = await getDocs(this.usersRef);
    const users: UserEntity[] = jsonUsers.docs.map(doc =>
      plainToClass(UserEntity, doc.data())
    );
    return users;
  }

  async getByEmail(email: string): Promise<UserEntity> {
    const docRef = doc(db, 'users', email);
    const docSnap = await getDoc(docRef);
    return plainToClass(UserEntity, docSnap.data());
  }
}
