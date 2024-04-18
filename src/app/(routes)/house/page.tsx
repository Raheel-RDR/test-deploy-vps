'use client';

import Countdown from 'react-countdown';

export default function House() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-5xl font-bold">House Countdown!</h1>
			<Countdown date={new Date('2025-04-09T00:00:00')} />
		</main>
	);
}
