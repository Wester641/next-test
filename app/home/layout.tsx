export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Home Page</h1>
      {children}
    </div>
  );
}
