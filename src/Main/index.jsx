import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './Logo';
import {VideoFrame} from './VideoFrame';
import {VideoContainer} from './VideoContainer';
import {NameContainer} from './NameContainer';
import {Outro} from './Outro';
import {BACKGROUND_COLOR} from './constants';

export const Introduction = (props) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{backgroundColor: BACKGROUND_COLOR}}>
			<AbsoluteFill style={{opacity}}>
				<Logo />
			</AbsoluteFill>
			<Sequence from={fps * 1.5}>
				<VideoFrame />
			</Sequence>
			<Sequence from={fps * 2}>
				<VideoContainer {...props} />
			</Sequence>
			<Sequence from={fps * 4}>
				<NameContainer {...props} />
			</Sequence>
			<Sequence from={durationInFrames - fps * 2}>
				<Outro />
			</Sequence>
		</AbsoluteFill>
	);
};
