import React from 'react';

const Bookmarks = () => {
  const d = 1;

  return (
		<div className="window" id="links">
			<div className="window-inner">
				<div className="title-bar" style={{ background: '#be4bdb', textAlign: 'center' }}>
					<span>Bookmarks</span>
				</div>
				<div className="window-content" style={{ textAlign: 'center' }}>
					<div className="links-list-container link-col-1">
						<ul className="links-list-1">
							<li>
								<a href="https://web.whatsapp.com/">Webzap</a>
							</li>
							<li>
								<a href="https://mail.google.com/mail/u/0/#inbox">Mail</a>
							</li>
							<li>
								<a href="https://www.facebook.com/">Facebook</a>
							</li>
							<li>
								<a href="https://www.youtube.com/">Youtube</a>
							</li>
							<li>
								<a href="https://github.com/guilhXavier/">Github</a>
							</li>
							<li>
								<a href="https://translate.google.com.br/?hl=en&tab=oT">Translate</a>
							</li>
							<li>
								<a href="https://drive.google.com/drive/my-drive">Drive</a>
							</li>
							<li>
								<a href="https://steamcommunity.com/">Steam</a>
							</li>
						</ul>
					</div>
					<div className="links-list-container link-col-2">
						<ul className="links-list-2">
							<li>
								<a href="https://www.twitch.tv/">Twitch</a>
							</li>
							<li>
								<a href="https://twitter.com/home">Twitter</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/feed/">Linkedin</a>
							</li>
							<li>
								<a href="https://www.hltv.org/">HLTV</a>
							</li>
							<li>
								<a href="https://www.reddit.com/">Reddit</a>
							</li>
							<li>
								<a href="https://discordapp.com/channels/@me">Discord</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Bookmarks;
