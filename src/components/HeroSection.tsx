const HeroSection = () => {
    return (
        <section className="relative py-10 md:py-20 bg-gradient-radial from-dark-red to-[#050505] min-h-[90vh] flex items-center text-center">
            {/* Background Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url(/assets/bg_texture.png)' }}
            />

            <div className="container max-w-[1200px] mx-auto px-5 relative z-10">
                {/* Header */}
                <header className="mb-10">
                    <span className="text-sm tracking-[2px] font-bold block mb-1">
                        OPERAÇÃO
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-none text-gray-200 uppercase bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                        BLACK FRIDAY
                    </h1>
                    <p className="font-bold tracking-[3px] mt-2 text-sm">
                        27 DE SETEMBRO
                    </p>
                </header>

                {/* Hero Content */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight max-w-[800px] mx-auto">
                        Em uma imersão de 6 horas eu vou te mostrar como fazer a{' '}
                        <span className="text-gold">maior injeção de caixa</span> da sua vida na{' '}
                        <span className="text-gold">black friday 2025</span>
                    </h2>

                    <p className="text-gray-text text-base md:text-xl max-w-[700px] mx-auto">
                        Em uma imersão de 6 horas, 100% prática e mão na massa, eu vou te mostrar como fazer um lançamento
                        de Black Friday que vai além do faturamento alto e coloca dinheiro de verdade no seu bolso.
                    </p>

                    <a
                        href="#"
                        className="block w-full max-w-[400px] mx-auto mt-8 bg-gradient-to-b from-[#F2D680] to-[#C49B3F] text-black font-black text-center py-4 px-5 rounded-full uppercase text-lg shadow-[0_4px_15px_rgba(229,200,117,0.3)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(229,200,117,0.5)]"
                    >
                        Liberar Acesso <span className="ml-2">🔒</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
