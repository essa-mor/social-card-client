import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SocialCardHeader from './SocialCardHeader';
import SocialCardPost from './SocialCardPost';
import SocialCardReactionPanel from './reactions/SocialCardReactionPanel';
import SocialCardCommentsContainer from '../../containers/comments/SocialCardCommentsContainer';

import './SocialCard.css';

class SocialCard extends PureComponent {
	render() {
		const { id, image, profileText, time, text, postImage, like, likes, shares,
			postComments, likeCallBack, shareCallBack } = this.props;
		return (<div className="Social_card">
			<SocialCardHeader
				image={image}
				profileText={profileText}
				time={time} />
			<SocialCardPost
				text={text}
				image={postImage}
			/>
			<SocialCardReactionPanel
				likes={likes}
				postComments={postComments}
				shares={shares}
				id={id}
				like={like}
				likes={likes}
				shares={shares}
				likeCallBack={likeCallBack}
				shareCallBack={shareCallBack}
			/>
			<SocialCardCommentsContainer id={id} />
		</div>);
	}
}

SocialCard.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	profileText: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	postImage: PropTypes.string.isRequired,
	like: PropTypes.bool,
	likes: PropTypes.number,
	shares: PropTypes.number,
	postComments: PropTypes.arrayOf(PropTypes.number).isRequired,
	likeCallBack: PropTypes.func.isRequired,
	shareCallBack: PropTypes.func.isRequired
};

export default SocialCard;