import InfiniteGallery from "@/components/ui/3d-gallery-photography";

// Prefix wajib supaya path gambar benar walau di-deploy di subfolder GitHub Pages
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function DemoOne() {
	const sampleImages = [
	{ src: asset("Foto (1).jpeg"), alt: "Foto 1" },
	{ src: asset("Foto (2).jpeg"), alt: "Foto 2" },
	{ src: asset("Foto (3).jpeg"), alt: "Foto 3" },
	{ src: asset("Foto (4).jpeg"), alt: "Foto 4" },
	{ src: asset("Foto (5).jpeg"), alt: "Foto 5" },
	{ src: asset("Foto (6).jpeg"), alt: "Foto 6" },
	{ src: asset("Foto (7).jpeg"), alt: "Foto 7" },
	{ src: asset("Foto (8).jpeg"), alt: "Foto 8" },
	{ src: asset("Foto (9).jpeg"), alt: "Foto 9" },
	{ src: asset("Foto (10).jpeg"), alt: "Foto 10" },
	{ src: asset("Foto (11).jpeg"), alt: "Foto 11" },
	{ src: asset("Foto (12).jpeg"), alt: "Foto 12" },
	{ src: asset("Foto (13).jpeg"), alt: "Foto 13" },
	{ src: asset("Foto (14).jpeg"), alt: "Foto 14" },
	{ src: asset("Foto (15).jpeg"), alt: "Foto 15" },
	{ src: asset("Foto (16).jpeg"), alt: "Foto 16" },
	{ src: asset("Foto (17).jpeg"), alt: "Foto 17" },
	{ src: asset("Foto (18).jpeg"), alt: "Foto 18" },
	{ src: asset("Video (1).mp4"), alt: "Video 1" },
	{ src: asset("Video (2).mp4"), alt: "Video 2" },
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
				<p>By: Tri Ahmad Fhatur Wahyu</p>
				<p className=" opacity-60">
					Mahasiswa Magang UNM
				</p>
			</div>
		</main>
	);
}
