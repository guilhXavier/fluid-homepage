import React from 'react';
import Axios from 'axios';
import Ellipse from './Ellipse';

const News = () => {
  const [headlines, setHeadlines] = React.useState([{}]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    Axios(
      `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${process.env.newsKey}`,
    ).then((res) => {
      const { articles } = res.data;
      setHeadlines(articles);
      setLoading(false);
    });
  }, []);

  return (
		<React.Fragment>
			{loading ? (
				<Ellipse />
			) : (
				<React.Fragment>
					<div className="window" id="news">
						<div className="window-inner">
							<div className="title-bar" style={{ background: '#be4bdb', textAlign: 'center' }}>
								<span>News</span>
							</div>
							<div className="window-content">
								<div className="news-list-container">
									<ul id="news-list" style={{ textAlign: 'center' }}>
										<li>
											<a href={headlines[0].url}>{headlines[0].title}</a>
										</li>
										<li>
											<a href={headlines[1].url}>{headlines[1].title}</a>
										</li>
										<li>
											<a href={headlines[2].url}>{headlines[2].title}</a>
										</li>
										<li>
											<a href={headlines[3].url}>{headlines[3].title}</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
  );
};

export default News;
