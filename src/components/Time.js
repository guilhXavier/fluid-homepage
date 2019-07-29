import React from 'react';

const Time = () => {
  const clock = () => {
    const date = new Date();
    const hors = date.getHours();
    const mins = date.getMinutes();

    return `${hors < 10 ? `0${hors}` : hors}:${mins < 10 ? `0${mins}` : mins}`;
  };

  const getDate = () => {
    const date = new Date();
    const v = date.toString().split(' ');
    return {
      weekday: v[0],
      month: v[1],
      num: v[2],
      year: v[3],
    };
  };

  const [timestamp, setTimestamp] = React.useState(clock());
  const [datestamp, setDatestamp] = React.useState(getDate());

  React.useEffect(() => {
    const interval = setInterval(() => setTimestamp(clock()), 1000);

    return () => clearInterval(interval);
  });

  return (
		<React.Fragment>
			<div className="window" id="time">
				<div className="window-inner">
					<div className="title-bar" style={{ background: '#be4bdb', textAlign: 'center' }}>
						<span>Time</span>
					</div>
					<div className="window-content">
						<div className="time-stamp">
							<span>{timestamp}</span>
						</div>
						<div className="date-stamp">
							<div className="date-sect weekday">
								<span>{datestamp.weekday}</span>
							</div>
							<div className="date-sect month-num">
								<span>
									{datestamp.month}
{' '}
{datestamp.num}
								</span>
							</div>
							<div className="date-sect year">{datestamp.year}</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
  );
};

export default Time;
