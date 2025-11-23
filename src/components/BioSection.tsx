const BioSection = () => {
    return (
        <section className="py-16 md:py-20 bg-[#050505]">
            <div className="container max-w-[1200px] mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image Column */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-[400px] aspect-square bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl relative overflow-hidden">
                            {/* Placeholder overlay - replace with actual image */}
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <span className="text-gray-500 text-sm">Tactical Portrait</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Leandro Ferrari:
                        </h2>
                        <h3 className="text-xl md:text-2xl font-semibold text-gold">
                            O Capitão da Operação Black Friday
                        </h3>

                        <div className="space-y-4 text-gray-text text-base md:text-lg">
                            <p>
                                Leandro Ferrari é um dos maiores nomes do mercado digital, muito conhecido por desenvolver o
                                método Corredor Polonês.
                            </p>

                            <p>
                                Com mais de R$110 milhões faturados, nos mais diversos nichos, e está entre as 15 maiores
                                agências da Hotmart, e uma das 50 maiores do mundo.
                            </p>

                            <p>
                                Atualmente, mentora lançadores que, em pouco mais de 2 anos já acumularam um faturamento de
                                mais de R$500 milhões em faturamento.
                            </p>

                            <p>
                                Agora, pela primeira vez, vai parar sua própria operação e abrir os bastidores da sua
                                campanha mais lucrativa: o Lançamento de Black Friday.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BioSection
