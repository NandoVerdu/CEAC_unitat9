<script lang="ts">
	import { Presentation, Slide, Code, Step } from '@components'
	import { signal } from '@motion'
	
	

	const circle = signal(
		{ x: 0, y: 200, r: 100, fill: '#00ffff' },
		{ duration: 2000 }
	)
</script>

<Presentation>
	<Slide animate>
		<p class="font-bold text-8xl">🪄 Animotion slide 1</p>
	</Slide>

	<Slide animate>
		slide 2
		<p class="font-bold text-6xl mt-8">🪄 Animotion</p>

		<div class="w-max mx-auto mt-16">
			<Code lang="ts" lines="1,4|2|3|1-4">
				{`
					const circle = signal(
						{ x: 0, y: 200, r: 80, fill: '#00ffff' },
						{ duration: 2000 }
					)
				`}
			</Code> 
		</div>
	</Slide>

	<Slide on:out={() => circle.reset()} animate>
		slide 3
		<p class="font-bold text-6xl mt-8">🪄 Animotion</p>

		<div class="w-max mx-auto mt-16">
			<Code
				lang="ts"
				lines="1,4|2|3|1-4"
				steps={[
					['2', async () => await circle.to({ x: 400, fill: '#ffff00' })],
					['3', async () => await circle.to({ x: 0, fill: '#00ffff' })],
					['1-4', () => circle.reset()],
				]}
			>
				{`
					async function animate() {
						await circle.to({ x: 400, fill: '#ffff00' })
						await circle.to({ x: 0, fill: '#00ffff' })
					}
				`}
			</Code>
		</div>

		<svg
			class="w-full h-[400px] mx-auto"
			viewBox="0 0 400 400"
			data-id="animation"
		>
			<circle cx={$circle.x} cy={$circle.y} r={$circle.r} fill={$circle.fill} />
			<text
				x={$circle.x}
				y={$circle.y}
				font-size={$circle.r * 0.4}
				font-family="JetBrains Mono"
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{$circle.x.toFixed(0)}
			</text>
		</svg>
	</Slide>
	
	<Slide>
		 slide 4
		<p class="font-bold text-6xl mt-8">🪄 Animotion</p>
		<p class="mt-16 text-3xl">
			Learn more by reading the
			<a
				class="underline"
				href="https://animotion.pages.dev/docs"
				target="_blank"
			>
				Animotion docs
			</a>.
		</p>
	</Slide>

	
	<Slide>
		
		<Step fadeIn><p class="text-[80px]">Concepte de márketing</p></Step>
		<Step fadeIn><p class="text-bs pt-12 leading-10">És un conjunt d'actuacions desenvolupades en l'empresa que té com a objectiu <strong>identificar les necessitats i els desitjos</strong> del mercat per poder elaborar una
			oferta comercial que aconsegueixi la màxima satisfacció dels clients.
		</p></Step>
		
	</Slide>

	<Slide>
		<Step fadeIn><p class="text-[80px]">Pla de màrketing</p></Step>
		<Step fadeIn><p class="text-bs pt-12 leading-10"> Document final d'una planificació estratègica. </p> </Step>
		<Step fadeIn><p class="text-bs pt-12 leading-10"> Estudi de l'evolució del mercat </p> </Step>
		<Step fadeIn><p class="text-bs pt-12 leading-10"> Identificació d'oportunitats en el mercat</p> </Step>
		<Step fadeIn><p class="text-bs pt-12 leading-10"> Finalitat: construir un avantatge competitiu</p> </Step>
	</Slide>

	<Slide>
		<Step fadeIn><p class="text-[50px] animate-pulse p-12">Un pla de màrketing (àmbit operatiu) respon les següents preguntes:</p></Step>
		<Step fadeIn>
		<div class="space-y-8">
		<div class="flex flex-row justify-center">
			<div class="bg-orange-500 rounded-lg p-4 mr-10 w-auto animate-waving-hand">Qué vendre?</div>
			<div class="bg-orange-500 rounded-lg p-4 w-auto animate-[bounce_1s_ease-in-out_infinite_0.5s_alternate]" >PRODUCTE</div>
		</div>
		<div class="flex flex-row justify-center">
			<div class="bg-stone-500 rounded-lg p-4 mr-10 w-auto animate-[bounce_1.5s_ease-in-out_infinite_1s_alternate]">Quant cobrar?</div>
			<div class="bg-stone-500 rounded-lg p-4 w-auto animate-[ping_2s_ease-in-out_infinite_1s]" >PREU</div>
		</div>
		<div class="flex flex-row justify-center">
			<div class=" bg-yellow-400 rounded-lg p-4 mr-10 w-auto animate-[bounce_2.5s_ease-in-out_infinite_2s_alternate]">On vendre?</div>
			<div class=" bg-yellow-400 rounded-lg p-4 w-auto animate-[pulse_.3s_linear_infinite]" >DISTRIBUCIÓ</div>
		</div>
		<div class="flex flex-row justify-center">
			<div class=" bg-teal-400 rounded-lg p-4 mr-10 w-auto animate-[bounce_0.5s_ease-in-out_infinite_2.8s_alternate]">Com vendre?</div>
			<div class=" bg-teal-400 rounded-lg p-4 w-auto animate-waving-hand" >COMUNICACIÓ</div>
		</div>
	</div>
	</Step>
	</Slide>
	
	<Slide>
		<div class="space-y-8">
		<div class="bg-orange-500 rounded-lg p-4 mr-10 w-auto animate-refine-slide">Estratègies de producte: LA MARCA</div>
		<Step class="bg-orange-100 text-black">Marca única: Yamaha</Step>
		<Step class="bg-orange-100 text-black">Marca individual: Una empresa (Unilever) amb productes diferents (TRESemmé, Timotei, Axe/Lynx, Rexona, Maizena, Lipton, Knorr, Ligeresa, Calvé)</Step>
	    <Step class="bg-orange-100 text-black">Marques per línies de producte: SONY, amb Xperia, Bravia, PlayStation, Vaio</Step>
		<Step class="bg-orange-100 text-black">Segones marques: Toyota amb Lexus</Step>
		<Step class="bg-orange-100 text-black">Marca blanca o de distribuïdor: Hacendado de Mercadona, Boomerang de ElCorteInglés</Step>
	</div>
	</Slide>
	
	
</Presentation>

