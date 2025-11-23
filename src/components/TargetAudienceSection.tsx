const HexagonIcon = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
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
)

const TargetAudienceSection = () => {
    return (
        <section className="py-16 md:py-20 bg-[#050505]">
            <div className="container max-w-[1200px] mx-auto px-5">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="bg-yellow-500 text-black p-6 max-w-[600px] mx-auto mb-8 font-semibold">
                        <p>Novembro não é mês de improviso. É mês de execução cirúrgica.</p>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-[900px] mx-auto">
                        Quem trata a Black Friday como mais um lançamento, termina o ano do mesmo jeito
                        que começou: <span className="text-gold">sem lucro.</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[800px] mx-auto">
                    {/* Card 1 */}
                    <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-lg text-center space-y-4 hover:border-red-custom transition-colors">
                        <div className="flex justify-center">
                            <HexagonIcon />
                        </div>
                        <p className="text-gray-text text-base md:text-lg">
                            Já faz lançamentos, mas não vê lucro no final
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-lg text-center space-y-4 hover:border-red-custom transition-colors">
                        <div className="flex justify-center">
                            <HexagonIcon />
                        </div>
                        <p className="text-gray-text text-base md:text-lg">
                            Quer transformar a Black Friday na maior entrada de caixa do ano
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TargetAudienceSection
