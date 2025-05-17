export default function CMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="outstatic">{children}</body>
    </html>
  );
} 