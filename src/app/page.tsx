export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className='text-2xl font-bold'>👋 Olá Lucas!</h2>
      <p className='text-md text-zinc-600'> Bem-vindo ao seu dashboard.</p>
      <div className='py-4'>
        <p className='text-zinc-600'>
          Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota
          uma pinga aí cumpadi! Admodum accumsan disputationi eu sit. Vide
          electram sadipscing et per. Sapien in monti palavris qui num significa
          nadis i pareci latim. Pellentesque nec nulla ligula. Donec gravida
          turpis a vulputate ultricies.
        </p>
      </div>
    </div>
  );
}
