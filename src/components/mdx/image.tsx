export default function PostImage({
	alt = "",
	caption,
	align,
	src = "",
	...props
}: {
	alt?: string;
	caption?: string;
	align?: string;
	src?: string;
}) {
	// console.log("PostImage:", { alt, caption, align, src, ...props });
	const classes = align === "left" ? "md:float-left md:max-w-sm md:mr-8 md:mt-0 lg:max-w-none lg:-ml-32" : "";
	caption = caption ?? alt;

	return (
		<figure className={classes}>
			<img className="w-full" {...props} src={src} alt={alt} />
			{caption && <figcaption className="mt-3 text-center text-sm text-gray-500">{caption}</figcaption>}
		</figure>
	);
}
