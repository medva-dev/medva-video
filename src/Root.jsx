import {Composition, getInputProps} from 'remotion';
import {Introduction} from './Main';
import {Logo} from './Main/Logo';
import {VideoFrame} from './Main/VideoFrame';
import {VideoContainer} from './Main/VideoContainer';
import {NameContainer} from './Main/NameContainer';
import {Outro} from './Main/Outro';

export const RemotionRoot = () => {
	const inputProps = getInputProps();

	return (
		<>
			<Composition
				id="MainVideo"
				component={Introduction}
				durationInFrames={Number(inputProps.duration) * Number(inputProps.fps)}
				fps={Number(inputProps.fps)}
				width={1920}
				height={1080}
				defaultProps={{
					name: 'This is my full name',
					videoUrl:
						'https://medva.s3.ap-southeast-1.amazonaws.com/video-uploads/sample.mp4',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Frame"
				component={VideoFrame}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="VideoContainer"
				component={VideoContainer}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="NameContainer"
				component={NameContainer}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Outro"
				component={Outro}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
