const ChecklistSection = () => {
    return (
        <section className="py-20 md:py-24 bg-[#050505]">
            <div className="container max-w-[1200px] mx-auto px-5">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight text-center mb-6 max-w-[900px] mx-auto">
                    A Black Friday pode ser <span className="text-gold">sua maior chance de lucro do
                        ano.</span> Mas só se você estiver pronto pra agir antes que ela comece.
                </h2>

                <p className="text-gray-text text-lg md:text-xl text-center max-w-[700px] mx-auto my-8">
                    No dia 27 de setembro, eu vou liderar a Operação Black
                    Friday: uma imersão ao vivo de 6 horas pra você montar a sua campanha do zero.
                </p>

                <p className="font-bold text-white text-xl text-center mt-10 mb-6">
                    Você vai sair com:
                </p>

                <ul className="list-none max-w-[600px] mx-auto mb-10 space-y-4">
                    <li className="flex items-start text-gray-200 text-base md:text-lg">
                        <span className="text-2xl mr-3">✅</span>
                        <span>A narrativa completa da sua campanha</span>
                    </li>
                    <li className="flex items-start text-gray-200 text-base md:text-lg">
                        <span className="text-2xl mr-3">✅</span>
                        <span>A estrutura das fases de captação, aquecimento, lembrete e vendas</span>
                    </li>
                    <li className="flex items-start text-gray-200 text-base md:text-lg">
                        <span className="text-2xl mr-3">✅</span>
                        <span>A oferta que vai te entregar o maior lucro do seu ano</span>
                    </li>
                    <li className="flex items-start text-gray-200 text-base md:text-lg">
                        <span className="text-2xl mr-3">✅</span>
                        <span>Além de modelos de anúncios, páginas, etc.</span>
                    </li>
                </ul>

                <p className="text-gray-text text-lg md:text-xl text-center max-w-[700px] mx-auto mb-6">
                    Tudo isso validado nos últimos 4 anos, em vários nichos, com
                    milhões faturados, e o principal: margem no bolso.
                </p>

                <p className="text-gray-text text-lg md:text-xl text-center max-w-[700px] mx-auto">
                    A única pergunta é: Você vai entrar no mês mais lucrativo do
                    ano... preparado pra pegar a sua fatia do bolo, ou só mais uma vez torcendo pra
                    dar certo?
                </p>
            </div>
        </section>
    )
}

export default ChecklistSection
