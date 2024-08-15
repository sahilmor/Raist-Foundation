import './globals.css';
// import '@mantine/carousel/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { ThemeProvider } from '@/components/providers/theme-provider';
// import {MantineProvider} from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'RAIST',
	description:
		'RAIST is serve food to the needy people. We are a non-profit organization that is dedicated to serving food to the needy people. We are a non-profit organization that is dedicated to serving food to the needy people.',}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			{/* <MantineProvider> */}
			{/* <ThemeProvider attribute='class' defaultTheme='light' enableSystem> */}
				<body className={inter.className}>{children}</body>
			{/* </ThemeProvider> */}
			{/* </MantineProvider> */}
				
		</html>
	);
}
