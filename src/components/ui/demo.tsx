import InfiniteGallery from "@/components/ui/3d-gallery-photography";

// Prefix wajib supaya path gambar benar walau di-deploy di subfolder GitHub Pages
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function DemoOne() {
	const sampleImages = [
	{ src: asset("foto (1).jpeg"), alt: "Foto 1" },
	{ src: asset("foto (2).jpeg"), alt: "Foto 2" },
	{ src: asset("foto (3).jpeg"), alt: "Foto 3" },
	{ src: asset("foto (4).jpeg"), alt: "Foto 4" },
	{ src: asset("foto (5).jpeg"), alt: "Foto 5" },
	{ src: asset("foto (6).jpeg"), alt: "Foto 6" },
	{ src: asset("foto (7).jpeg"), alt: "Foto 7" },
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
