import {
	AbsoluteFill,
	useCurrentFrame,
	Video,
	interpolate,
	getInputProps,
} from 'remotion';

export const VideoContainer = (props) => {
	const inputProps = getInputProps();

	const videoUrl = inputProps.videoUrl ?? props.videoUrl;

	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 15], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				opacity,
				width: '100%',
			}}
		>
			<Video src={videoUrl} style={{width: '100%'}} />
		</AbsoluteFill>
	);
};
