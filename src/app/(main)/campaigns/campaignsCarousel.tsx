import { CloudinaryClientWrapper } from "@/components/cloudinaryClientWrapper";
import Marquee from "@/components/magicui/marquee";

/* campaign to be updated */

const images = [
	"chalking/v9fzza6cngrtuekakzwx",
	"chalking/pbvyi5hhwwvwymwxlqlf",
	"chalking/tee3yzcrs3cifv2ik0sn",
	"chalking/ngprl6hbghpdrpm2kt5l",
	"chalking/doexxfyzlbchllc7xqz4",
	"chalking/lcxxz41kgbip7fgtuc7d",
	"chalking/dnkepf6g1bh8rdvzfbao",
	"chalking/uscuftrofndjkddyknf3",
	"chalking/xqzqnu4m3btkey7hkbbv",
	"chalking/pde7wbc8tvmnrhwsxh9s",
	"chalking/cx2t9ix4cs8hdvxfzzn5",
	"chalking/fmjyeb6nh3clx5ohvqi5",
	"chalking/ozvb8biyhvjnw6apszp5",
	"chalking/bkllm2lcj3vdx0hud5kq",
	"chalking/qj80yycrcs6pigua69u2",
];
export default function CampaignsCarousel() {
	return (
		<section className="w-full py-12 md:py-24" id="gallery">
			<div
				className="mx-auto flex flex-col items-center justify-center space-y-4 pb-6 text-center md:pb-12 lg:pb-16"
				data-aos="fade-left"
			>
				<h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl dark:text-blue-400">
					Check out our recent chalking event!
				</h2>
			</div>
			<div className="container px-4 md:px-6">
				<div className="max-w-6x w-full">
					<Marquee pauseOnHover className="[--duration:20s]">
						{images.map((image) => (
							<CloudinaryClientWrapper
								key={image}
								src={image}
								width={200}
								height={400}
								alt={image}
								crop="auto"
								className="object-cover duration-300 hover:scale-110"
							/>
						))}
					</Marquee>
				</div>
			</div>
		</section>
	);
}
