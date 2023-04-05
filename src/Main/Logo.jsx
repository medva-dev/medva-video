import {Space} from 'antd';
import {
	AbsoluteFill,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Img,
	interpolate,
} from 'remotion';

import {Title} from './Title';
import {COLOR_1, INTRO_DURATION} from './constants';

export const Logo = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const scale = spring({
		frame,
		config: {
			mass: 1,
		},
		fps,
	});

	const startFadeout = INTRO_DURATION * fps;
	const opacity = interpolate(
		frame,
		[startFadeout - 15, startFadeout - 5],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill
			style={{
				transform: `scale(${scale})`,
				opacity,
				width: '100%',
			}}
		>
			<div align="center" style={{margin: 'auto'}}>
				<Space size={36}>
					<Img
						src="https://medva.s3.ap-southeast-1.amazonaws.com/images/medva+-+icon+-+blue.png"
						style={{width: 100}}
					/>
					<Img
						src="https://medva.s3.ap-southeast-1.amazonaws.com/images/medva+-+logo+-+label.png"
						style={{width: 500}}
					/>
				</Space>
				<div>
					<Title
						titleText="MEDICAL AND DENTAL VIRTUAL ASSISTANTS"
						titleColor={COLOR_1}
					/>
				</div>
			</div>
		</AbsoluteFill>
	);
};
