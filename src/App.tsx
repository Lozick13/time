import { useState } from 'react';

function DateTimePretty(
	Component: (props: { date: string }) => JSX.Element,
	date: string
) {
	const formatDate = (date: string) => {
		const newDate = new Date(date);
		const now = new Date();
		const secondsPassed = Math.floor(
			(now.getTime() - newDate.getTime()) / 1000
		);

		if (secondsPassed < 3600) {
			const minutes = Math.floor(secondsPassed / 60);
			return `${minutes} минут назад`;
		} else if (secondsPassed < 86400) {
			const hours = Math.floor(secondsPassed / 3600);
			return `${hours} часов назад`;
		} else {
			const days = Math.floor(secondsPassed / 86400);
			return `${days} дней назад`;
		}
	};

	return <Component date={formatDate(date)} />;
}

function DateTime(props: { date: string }) {
	return <p className='date'>{props.date}</p>;
}

function Video(props: { url: string; date: string }) {
	return (
		<div className='video'>
			<iframe
				src={props.url}
				frameborder='0'
				allow='autoplay; encrypted-media'
				allowfullscreen
			></iframe>
			{DateTimePretty(DateTime, props.date)}
		</div>
	);
}

function VideoList(props: {
	list: {
		url: string;
		date: string;
	}[];
}) {
	return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
	const [list, setList] = useState([
		{
			url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
			date: '2017-07-31 13:24:00',
		},
		{
			url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
			date: '2018-03-03 12:10:00',
		},
		{
			url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
			date: '2018-02-03 23:16:00',
		},
		{
			url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
			date: '2018-01-03 12:10:00',
		},
		{
			url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
			date: '2024-08-07 06:24:00',
		},
		{
			url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
			date: '2024-08-07 10:24:00',
		},
	]);

	return <VideoList list={list} />;
}
