import './globals.css';
import AppShell from '../components/AppShell';

export const metadata = {
  title: 'WanderGuide — Travel Atlas & Field Notes',
  description:
    'Independent travel guide featuring Philippine islands, international landscapes, daily budgets, and 3-day itineraries.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}