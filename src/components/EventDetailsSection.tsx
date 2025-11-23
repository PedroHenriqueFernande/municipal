const HexIconSmall = ({ emoji }: { emoji: string }) => (
    <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
        <path
            d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z"
            fill="#333"
            stroke="#999"
            strokeWidth="2"
        />
        <path
            d="M50 15 L85 32.5 L85 67.5 L50 85 L15 67.5 L15 32.5 Z"
            fill="#D92525"
        />
        <text
            x="50"
            y="65"
            fontSize="35"
            textAnchor="middle"
            fill="#E5C875"
        >
            {emoji}
        </text>
    </svg>
)

const EventDetailsSection = () => {
    return (
        <section className="py-16 md:py-20 bg-[#050505]">
            <div className="container max-w-[1200px] mx-auto px-5">
                <p className="text-center text-gray-text uppercase tracking-wider mb-8 text-sm md:text-base">
                    participe da maior operação do ano
                </p>

                <div className="bg-[#0a0a0a] border-2 border-gray-800 rounded-lg p-8 md:p-12 max-w-[700px] mx-auto space-y-8">
                    {/* Logo Area */}
                    <div className="text-center space-y-2">
                        <span className="inline-block bg-red-custom text-white px-4 py-1 text-xs font-bold tracking-wider">
                            OPERAÇÃO
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl text-white uppercase leading-tight">
                            BLACK<br />FRIDAY
                        </h2>
                    </div>

                    {/* Event Stats */}
                    <div className="space-y-6">
                        {/* Stat 1 */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <HexIconSmall emoji="📅" />
                            </div>
                            <div>
                                <div className="text-gold text-2xl font-bold mb-1">1 dia</div>
                                <p className="text-gray-text text-sm md:text-base">
                                    e experiência imersiva online, dia 27/09 às 09h30
                                </p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <HexIconSmall emoji="🕒" />
                            </div>
                            <div>
                                <div className="text-gold text-2xl font-bold mb-1">6 horas</div>
                                <p className="text-gray-text text-sm md:text-base">
                                    de conteúdo prático
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDetailsSection
