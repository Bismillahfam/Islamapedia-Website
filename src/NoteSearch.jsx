import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
import { fetchNotes } from "./NoteFunctions";
