export const metadata = {
  title: "User Profile - YourPhotos",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
