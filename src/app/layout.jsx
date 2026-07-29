import "./globals.css"; // Ensure this points to your global styles

export const metadata = {
  title: "DevConnect",
  description: "The open-source network for developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
