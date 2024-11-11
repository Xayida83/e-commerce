

interface MainLayoutProps {

  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
    {/* Navabar*/}
    <main>
      {children}
    </main>
    </>
  )
}