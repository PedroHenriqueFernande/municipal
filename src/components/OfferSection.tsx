const HexBadge = () => (
    <div className="w-12 h-12 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
                d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z"
                fill="#333"
                stroke="#555"
                strokeWidth="2"
            />
            <path
                d="M50 15 L85 32.5 L85 67.5 L50 85 L15 67.5 L15 32.5 Z"
                fill="#D92525"
            />
            <text
                x="50"
                y="65"
                fontSize="40"
                textAnchor="middle"
                fill="#E5C875"
            >
                ✓
            </text>
        </svg>
    </div>
)

const OfferSection = () => {
    return (
        <section className="py-20 md:py-24 bg-[#050505]">
            <div className="container max-w-[1200px] mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {/* Left Column: Benefits (Dark Cards) */}
                    <div className="space-y-6">
                        <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-lg flex items-start gap-4">
                            <HexBadge />
                            <p className="text-gray-text text-base md:text-lg">
                                Está cansado de campanhas que só geram placa de faturamento
                            </p>
                        </div>

                        <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-lg flex items-start gap-4">
                            <HexBadge />
                            <p className="text-gray-text text-base md:text-lg">
                                Quer um manual com começo, meio, fim, para não correr risco de errar na operação mais
                                importante do ano
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Money CTA (White Card) */}
                    <div className="flex items-center justify-center">
                        <div className="bg-white rounded-lg p-8 text-center max-w-[400px] w-full shadow-2xl">
                            <div className="mb-6">
                                <img
                                    src="/assets/hand_money.png"
                                    alt="Mão segurando dinheiro"
                                    className="w-full max-w-[250px] mx-auto h-auto"
                                />
                            </div>

                            <a
                                href="#"
                                className="block bg-gradient-to-b from-[#F2D680] to-[#C49B3F] text-black font-black py-4 px-6 rounded-full uppercase text-lg shadow-lg hover:scale-105 transition-transform"
                            >
                                Liberar Acesso <span className="ml-2">🔒</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Commander Image (Bottom) */}
                <div className="flex justify-center mt-12">
                    <img
                        src="/assets/soldier_portrait.png"
                        alt="Comandante"
                        className="w-full max-w-[500px] h-auto rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default OfferSection
