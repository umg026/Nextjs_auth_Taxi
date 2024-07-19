"use client";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Navbar from "../shared/Navbar";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <header className="flex justify-between px-2 shadow-sm border-b-[1px]">
        <Navbar />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <main>{children}</main>
    </ClerkProvider>
  );
};

export default ClientProvider;
