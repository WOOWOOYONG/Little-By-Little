import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import API_KEY from "./key";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "fir-first-try-8241d.firebaseapp.com",
  projectId: "fir-first-try-8241d",
  storageBucket: "fir-first-try-8241d.appspot.com",
  messagingSenderId: "1040054335948",
  appId: "1:1040054335948:web:0b045ae0b1e1e836060569",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, "comicbooks");

// queries
const q = query(colRef, orderBy("createdAt"));

// real time collection data
const unsubCol = onSnapshot(q, (snapshot) => {
  let comicbooks = [];
  snapshot.docs.forEach((doc) => {
    comicbooks.push({ ...doc.data(), id: doc.id });
  });
  console.log(comicbooks);
});

// adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp(),
  }).then(() => {
    addBookForm.reset();
  });
});

// deleting documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const docRef = doc(db, "comicbooks", deleteBookForm.id.value);
  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});

// get a single document
const docRef = doc(db, "comicbooks", "ebwAuTCdh1oxKl87ItJE");

const unsubDoc = onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
});

// updating a document
const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const docRef = doc(db, "comicbooks", updateForm.id.value);
  updateDoc(docRef, {
    title: "七龍珠",
  }).then(() => {
    updateForm.reset();
  });
});

// signing users up
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      //   console.log("user created", cred.user);
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// logging in and out
const logoutButton = document.querySelector(".logout");
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      //   console.log("the user signed out");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      //   console.log("user logged in:", cred.user);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// subscribing to auth changes
// 監聽使用者註冊、登入、登出
const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log("user status changed:", user);
});

// unsubscribing from changes (auth & db)
// 取消監聽
const unsubButton = document.querySelector(".unsub");
unsubButton.addEventListener("click", () => {
  console.log("unsubscribing");
  unsubCol();
  unsubDoc();
  unsubAuth();
});
