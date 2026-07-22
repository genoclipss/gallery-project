import InfiniteGallery from "@/components/ui/3d-gallery-photography";

// Prefix wajib supaya path gambar benar walau di-deploy di subfolder GitHub Pages
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function DemoOne() {
	const sampleImages = [
	{ src: "/foto (1).jepg", alt: "Foto (1).jepg" },
	{ src: "/foto (2).jepg", alt: "Foto (2).jepg" },
	{ src: "/foto (3).jepg", alt: "Foto (3).jepg" },
	{ src: "/foto (4).jepg", alt: "Foto (4).jepg" },
	{ src: "/foto (5).jepg", alt: "Foto (5).jepg" },
	{ src: "/foto (6).jepg", alt: "Foto (6).jepg" },
	{ src: "/foto (7).jepg", alt: "Foto (7).jepg" },	
];

	return (
		<main className="min-h-screen h-full w-full">
			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			<div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
					<span className="italic">Tribun Timur</span>
				</h1>
			</div>

			<div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
				<p>Use mouse wheel, arrow keys, or touch to navigate</p>
				<p className=" opacity-60">
					Auto-play resumes after 3 seconds of inactivity
				</p>
			</div>
		</main>
	);
}
