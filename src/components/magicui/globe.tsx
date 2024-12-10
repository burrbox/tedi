"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { useSpring } from "react-spring";

import { clamp, cn } from "@/lib/utils";
import { MapPinIcon } from "lucide-react";
import Teams from "@/components/teams";

const TAU = Math.PI * 2;

const GLOBE_CONFIG: COBEOptions = {
	width: 800,
	height: 800,
	onRender: () => void 0,
	devicePixelRatio: 2,
	phi: 0,
	theta: 0.5,
	dark: 0,
	diffuse: 0.4,
	mapSamples: 16000,
	mapBrightness: 1.2,
	baseColor: [1, 1, 1],
	markerColor: [251 / 255, 100 / 255, 21 / 255],
	glowColor: [1, 1, 1],
	markers: [],
};

const locationToAngles = (lat: number, long: number) => {
	return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180] as [number, number];
};

export default function Globe({
	className,
	config: configOverride,
	speed = 0.0,
	phi: defaultPhi = 0,
	markers = [],
}: {
	className?: string;
	config?: Partial<COBEOptions>;
	speed?: number;
	phi?: number;
	markers?: { name: string; location: [number, number] }[];
}) {
	let phi = 0;
	// let theta = 0;
	let currentPhi = 0;
	let currentTheta = 0;
	let width = 0;
	const scale = useRef(configOverride?.scale ?? 1.1);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const focusRef = useRef([null, null] as [number | null, number | null]);
	const pointerInteracting = useRef(null as number | null);
	const pointerInteractionMovement = useRef(0);
	const [{ r }, api] = useSpring(() => ({
		r: defaultPhi,
		config: {
			mass: 1,
			tension: 280,
			friction: 40,
			precision: 0.001,
		},
	}));

	const updatePointerInteraction = (value: number | null) => {
		pointerInteracting.current = value;
		canvasRef.current!.style.cursor = value ? "grabbing" : "grab";
		if (value !== null) {
			focusRef.current = [null, null];
			// scale.current = 1.1;
		}
	};

	const updateMovement = (clientX: number) => {
		if (pointerInteracting.current !== null) {
			const delta = clientX - pointerInteracting.current;
			pointerInteractionMovement.current = delta;
			api.start({ r: delta / 200 });
		}
	};

	const onRender = useCallback(
		(state: Record<string, number>) => {
			console.log("rendering", scale);
			state.scale = scale.current;
			if (!pointerInteracting.current) phi += speed;
			if (focusRef.current.includes(null)) {
				state.phi = phi + r.get();
			} else {
				state.phi = currentPhi;
				state.theta = currentTheta;
				const [focusPhi, focusTheta] = focusRef.current;
				const distPositive = (focusPhi! - currentPhi + TAU) % TAU;
				const distNegative = (currentPhi - focusPhi! + TAU) % TAU;
				// Control the speed
				if (distPositive < distNegative) {
					currentPhi += distPositive * 0.08;
				} else {
					currentPhi -= distNegative * 0.08;
				}
				currentTheta = currentTheta * 0.92 + focusTheta! * 0.08;
			}
			state.width = width * 2;
			state.height = width * 2;
		},
		[pointerInteracting, phi, r, focusRef, width, scale],
	);

	const onResize = () => {
		if (canvasRef.current) {
			width = canvasRef.current.offsetWidth;
		}
	};

	const [teamL, setTeamL] = useState("all");

	useEffect(() => {
		window.addEventListener("resize", onResize);
		onResize();

		const globe = createGlobe(canvasRef.current!, {
			...GLOBE_CONFIG,
			...configOverride,
			width: width * 2,
			height: width * 2,
			onRender,
		});

		canvasRef.current!.addEventListener(
			"wheel",
			(e) => {
				e.preventDefault();
				scale.current = clamp(0.5, 3, scale.current + e.deltaY * -0.001);
			},
			{ passive: false },
		);

		setTimeout(() => (canvasRef.current!.style.opacity = "1"));
		return () => globe.destroy();
	}, []);

	return (
		<div className="mx-6 grid items-stretch justify-center gap-2 lg:grid-cols-2">
			<div>
				<div className={cn("mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
					<canvas
						className={cn(
							"my-5 h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
							// " hidden lg:block",
						)}
						ref={canvasRef}
						onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
						onPointerUp={() => updatePointerInteraction(null)}
						onPointerOut={() => updatePointerInteraction(null)}
						onMouseMove={(e) => updateMovement(e.clientX)}
						onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
					/>
					{markers && (
						<div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2">
							{/* <div className="whitespace-nowrap">Go to:</div> */}
							{markers.map((marker) => (
								<button
									key={marker.name}
									className="flex items-center gap-1 rounded-xl bg-green-500 px-3 py-2 text-stone-100 duration-300 hover:bg-green-400 dark:bg-green-600 dark:hover:bg-green-700"
									onClick={() => {
										focusRef.current = locationToAngles(marker.location[0], marker.location[1]);
										scale.current = 1.1;
										setTeamL(marker.name);
									}}
								>
									<MapPinIcon />
									<div className="whitespace-nowrap">{marker.name}</div>
								</button>
							))}
						</div>
					)}
				</div>
			</div>
			<div>
				<Teams team={`${teamL}`} />
			</div>
		</div>
	);
}
