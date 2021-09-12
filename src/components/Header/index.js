import React, { useContext } from "react";
import { Link } from "react-router-dom";

import WMMSLogo from "../../images/movie-search-logo.png";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
// Context
import { Context } from "../../context";

const Header = () => {
	const [user] = useContext(Context);
	console.log(user);

	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={WMMSLogo} alt="wmms-logo" />
				</Link>
				{user ? (
					<span>Logged in as: {user.username}</span>
				) : (
					<Link to="/login">
						<span>Log in</span>
					</Link>
				)}
				<TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
			</Content>
		</Wrapper>
	);
};

export default Header;
