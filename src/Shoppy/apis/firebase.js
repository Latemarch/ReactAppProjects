import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, set } from 'firebase/database'
import { v4 as uuid } from 'uuid'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_SHOPPY_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_SHOPPY_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_SHOPPY_FIREBASE_DB_URL,
  databaseURL:
    'https://shoppy-1e0d8-default-rtdb.asia-southeast1.firebasedatabase.app',
  rojectId: process.env.REACT_APP_SHOPPY_FIREBASE_PROJECT_ID,
}

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()
const database = getDatabase(app)

export function login() {
  signInWithPopup(auth, provider).catch(console.error)
}

export function logout() {
  signOut(auth).catch(console.error)
}

export function onUserStateChange(callback) {
  // actually ftn bellow watch the authstate and let me know whenever state changed
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null
    callback(updatedUser)
  })
}

async function adminUser(user) {
  return get(ref(database, 'admins')).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val()
      const isAdmin = admins.includes(user.uid)
      return { ...user, isAdmin }
    }
    return user
  })
}

export async function addNewProduct(product, image) {
  const id = uuid()
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(','),
  })
}
