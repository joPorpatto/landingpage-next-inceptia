"use client";

import NextLink from "next/link";
import Navbar from "../../components/navbar/Navbar";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/router";
import Homepage from "./(home)/page";

export default function Page({ children }: { children: React.ReactNode }) {
  return <Homepage />;
}
