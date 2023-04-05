import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BACKGROUND_COLOR, COLOR_1} from './constants';

export const Outro = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const scale = spring({
		frame,
		from: 0,
		to: 1,
		config: {
			mass: 1,
		},
		fps: videoConfig.fps,
	});

	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<AbsoluteFill
			style={{
				width: '100%',
				backgroundColor: BACKGROUND_COLOR,
				opacity,
			}}
		>
			<h1
				style={{
					width: '100%',
					textAlign: 'center',
					fontSize: 70,
					margin: 'auto',
					transform: `scale(${scale})`,
					color: COLOR_1,
				}}
			>
				MEDVAlues you
			</h1>
		</AbsoluteFill>
	);
};
