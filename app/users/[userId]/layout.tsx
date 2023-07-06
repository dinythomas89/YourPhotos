export const metadata = {
  title: "Dynamic User Profile - YourPhotos",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
