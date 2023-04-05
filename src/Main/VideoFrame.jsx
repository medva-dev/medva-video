import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	Img,
	interpolate,
} from 'remotion';

export const VideoFrame = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, fps / 2], [0, 1], {
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
			<Img
				src="https://medva.s3.ap-southeast-1.amazonaws.com/images/medva+-+frame.png"
				style={{width: '100%', zIndex: 999}}
			/>
			<Img
				src="https://medva.s3.ap-southeast-1.amazonaws.com/images/medva+-+logo+-+full.png"
				style={{
					position: 'absolute',
					right: 0,
					bottom: 30,
					zIndex: 1000,
					width: 300,
				}}
			/>
		</AbsoluteFill>
	);
};
