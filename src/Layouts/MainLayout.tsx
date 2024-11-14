import { ReactNode } from "react";


type MainLayoutProps ={
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // ({children}: CardProps)
  return (
    <>
    {/* Navabar*/}
    <main>
      {children}
    </main>
    </>
  )
}