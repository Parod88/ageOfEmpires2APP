import '../styles/globals.css';
import { Navbar, Header } from '../components/Layout';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title> Next13 app</title>
      </head>
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
