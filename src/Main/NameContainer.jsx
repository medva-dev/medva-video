import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	getInputProps,
} from 'remotion';
import {NAME_BACKGROUND_COLOR, NAME_TEXT_COLOR} from './constants';

export const NameContainer = (props) => {
	const inputProps = getInputProps();
	const name = inputProps.name ?? props.name;

	const frame = useCurrentFrame();

	const left = interpolate(frame, [30, 45], [-100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacity = interpolate(frame, [300, 315], [1, 0]);

	return (
		<AbsoluteFill
			style={{
				width: '100%',
				left: `${left}%`,
				opacity,
			}}
		>
			<h2
				style={{
					position: 'absolute',
					bottom: 90,
					textAlign: 'center',
					width: '100%',
					fontSize: 50,
					backgroundColor: NAME_BACKGROUND_COLOR,
					paddingTop: 10,
					paddingBottom: 10,
					color: NAME_TEXT_COLOR,
					zIndex: 998,
				}}
			>
				{name}
			</h2>
		</AbsoluteFill>
	);
};
